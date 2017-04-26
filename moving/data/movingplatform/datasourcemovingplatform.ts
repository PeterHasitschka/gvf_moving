import {MovingDataSourceInterace} from "../datasource_interface";
import {UiService} from "../../../gvfcore/services/ui.service";
import {DocumentDataEntity} from "../../graph/data/document";
import {AuthorDataEntity} from "../../graph/data/author";
import {DocAuthorConnection} from "../../graph/data/connections/docauthor";
import {AffiliationDataEntity} from "../../graph/data/affiliation";
import {AuthorAffiliationConnection} from "../../graph/data/connections/authoraffiliation";
import {YearDataEntity} from "../../graph/data/year";
import {DocYearConnection} from "../../graph/data/connections/docyear";
import {GraphVisConfig} from "../../../gvfcore/components/graphvis/config";
export class MovingDataSourceMovingPlatform implements MovingDataSourceInterace {


    constructor(private dataContainer) {
    }

    fetchDataFromServer() {
        return false;
    }


    getLoadedData() {
        return null;
    }

    setData(data) {

        UiService.consolelog(["Setting data", data], this);
        let dataDebug = GraphVisConfig.scene.debug.dataDebug;
        /*
         DOCUMENTS
         */
        let documentResults = data;
        documentResults.forEach((documentResult:Object) => {


            let doc = new DocumentDataEntity(documentResult);

            let yearDataStart = documentResult['_source']['startDate'];
            let yearDataEnd = documentResult['_source']['startDate'];

            let dStart = new Date(yearDataStart);
            let dEnd = new Date(yearDataEnd);

            if (!dEnd.getFullYear())
                dEnd = dStart;

            let yStart = dStart.getFullYear();
            let yEnd = dEnd.getFullYear();

            if (yStart) {
                for (var currY = yStart; currY <= yEnd; currY++) {
                    let year = YearDataEntity.getByYear(currY);
                    if (!year)
                        year = new YearDataEntity(currY);

                    let docYearConn = new DocYearConnection(doc, year, {});
                    doc.addConnection(docYearConn);
                    year.addConnection(docYearConn);
                }
            }


            /*
             AUTHORS
             */
            let authorsData = documentResult['_source']['authors'];


            // No authors available
            if (typeof authorsData === "undefined")
                authorsData = [];

            /*
             Handling the current data structure which does not meet the common data model
             */
            if (!Array.isArray(authorsData)) {
                console.warn("The AUTHORS data does not meet the common data model. Not an array. Assuming object " +
                    "Handling it as a single author.", authorsData, typeof authorsData);
                authorsData = [authorsData];
            }

            authorsData.forEach((authorData) => {
                let author = <AuthorDataEntity>AuthorDataEntity.getByEmailAddress(authorData['email']);
                if (author === null)
                    author = new AuthorDataEntity(authorData);

                let docAuthorConnection = new DocAuthorConnection(doc, author, {});
                doc.addConnection(docAuthorConnection);
                author.addConnection(docAuthorConnection);

                /*
                 AFFILIATIONS
                 */
                let affiliationsData = author.getData("affiliations");

                if (affiliationsData === null)
                    return;

                // No affiliations available
                if (typeof affiliationsData === "undefined")
                    affiliationsData = [];

                /*
                 Handling the current data structure which does not meet the common data model
                 */
                if (!Array.isArray(affiliationsData)) {
                    console.warn("The AFFILIATIONS data does not meet the common data model. Not an array. Assuming object " +
                        "Handling it as a single affiliation.", affiliationsData, typeof affiliationsData);
                    affiliationsData = [affiliationsData];
                }

                affiliationsData.forEach((affiliationData) => {
                    let aff = AffiliationDataEntity.getByName(affiliationData['name']);
                    if (aff === null)
                        aff = new AffiliationDataEntity(affiliationData);

                    let authorAffConnection = new AuthorAffiliationConnection(author, aff, {});
                    author.addConnection(authorAffConnection);
                    aff.addConnection(authorAffConnection);
                });

            });
        });
        if (dataDebug) {
            UiService.consolelog(DocumentDataEntity.getDataList(), this, null, 1);
            UiService.consolelog(AuthorDataEntity.getDataList(), this, null, 1);
            UiService.consolelog(AffiliationDataEntity.getDataList(), this, null, 1);
            UiService.consolelog(YearDataEntity.getDataList(), this, null, 1);
        }
    }
}