import {MovingDataSourceInterace} from "../datasource_interface";
import {UiService} from "../../../gvfcore/services/ui.service";
import {DocumentDataEntity} from "../../graph/data/document";
import {AuthorDataEntity} from "../../graph/data/author";
import {DocAuthorConnection} from "../../graph/data/connections/docauthor";
import {AffiliationDataEntity} from "../../graph/data/affiliation";
import {AuthorAffiliationConnection} from "../../graph/data/connections/authoraffiliation";
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

        /*
         DOCUMENTS
         */
        let hits = data;
        hits.forEach((hit:Object) => {


            let doc = new DocumentDataEntity(hit);

            /*
             AUTHORS
             */
            let authorsData = hit['_source']['authors'];
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

        console.log(DocumentDataEntity.getDataList());
        console.log(AuthorDataEntity.getDataList());
        console.log(AffiliationDataEntity.getDataList());
    }
}