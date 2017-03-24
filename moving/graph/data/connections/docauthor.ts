

import {BasicConnection} from "../../../../gvfcore/components/graphvis/data/databasicconnection";
import {DocumentDataEntity} from "../document";
import {AuthorDataEntity} from "../author";
export class DocAuthorConnection extends BasicConnection {

    protected static dataList:DocAuthorConnection[] = [];


    constructor(doc:DocumentDataEntity, author:AuthorDataEntity, data:Object) {
        let id = DocAuthorConnection.getDataList().length;
        super(id, doc, author, data);
        DocAuthorConnection.dataList.push(this);
    }

    public getDoc():DocumentDataEntity{
        return <DocumentDataEntity>this.entitySrc;
    }

    public getAuthor():AuthorDataEntity{
        return <AuthorDataEntity>this.entityDst;
    }

    /**
     * Get all Connecitons
     * @returns {BasicConnection[]}
     */
    public static getDataList():DocAuthorConnection[] {
        return DocAuthorConnection.dataList;
    }
}