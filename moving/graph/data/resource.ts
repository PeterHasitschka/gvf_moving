
import {BasicEntity} from "../../../../gvfcore/components/graphvis/data/databasicentity";
export class ResourceDataEntity extends BasicEntity {


    protected static dataList:ResourceDataEntity[] = [];


    /**
     * Entity constructor
     * @param data Holds an id and at least a 'name' property by current definition
     */
    constructor(id:number, data:Object) {
        super(id, data);
        ResourceDataEntity.dataList.push(this);
    }

    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return ResourceDataEntity.dataList;
    }
}