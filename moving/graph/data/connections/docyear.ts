

import {BasicConnection} from "../../../../gvfcore/components/graphvis/data/databasicconnection";
import {DocumentDataEntity} from "../document";
import {YearDataEntity} from "../year";
export class DocYearConnection extends BasicConnection {

    protected static dataList:DocYearConnection[] = [];


    constructor(doc:DocumentDataEntity, year:YearDataEntity, data:Object) {
        let id = DocYearConnection.getDataList().length;
        super(id, doc, year, data);
        DocYearConnection.dataList.push(this);
    }

    public getDoc():DocumentDataEntity{
        return <DocumentDataEntity>this.entitySrc;
    }

    public getYear():YearDataEntity{
        return <YearDataEntity>this.entityDst;
    }

    /**
     * Get all Connecitons
     * @returns {DocYearConnection[]}
     */
    public static getDataList():DocYearConnection[] {
        return DocYearConnection.dataList;
    }
}