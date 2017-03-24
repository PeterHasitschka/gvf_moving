import {MovingDataSourceInterace} from "../datasource_interface";
import {UiService} from "../../../gvfcore/services/ui.service";
import {DocumentDataEntity} from "../../graph/data/document";
import {AuthorDataEntity} from "../../graph/data/author";
import {DocAuthorConnection} from "../../graph/data/connections/docauthor";
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

        if (data['timed_out']) {
            console.error("Data from MOVING platform has the 'timed_out' flag set! Abort!");
            return false;
        }

        let hits = data['hits']['hits'];
        hits.forEach((hit:Object) => {


            let doc = new DocumentDataEntity(hit);


            let authorsData = hit['_source']['authors'];

            /*
             Handling the current data structure which does not meet the common data model
             */
            if (typeof  authorsData === "object") {
                console.warn("The AUTHORS data does not meet the common data model. Object instead of array. " +
                    "Handling it as a single author.");
                authorsData = [authorsData];
            }

            authorsData.forEach((authorData) => {
                console.log(authorData);
                let author = AuthorDataEntity.getByEmailAddress(authorData['email']);
                if (author === null)
                    author = new AuthorDataEntity(authorData);

                let docAuthorConnection = new DocAuthorConnection(doc, author, {});
                doc.addConnection(docAuthorConnection);
                author.addConnection(docAuthorConnection);
            });
        });
    }
}