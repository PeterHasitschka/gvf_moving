
import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
export class PostDataEntity extends BasicEntity {


    protected static dataList:PostDataEntity[] = [];


    /**
     * Entity constructor
     * @param data Holds an id and at least a 'name' property by current definition
     */
    constructor(data:Object) {
        let id = PostDataEntity.dataList.length;
        super(id, data);
        PostDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return PostDataEntity.dataList;
    }
}