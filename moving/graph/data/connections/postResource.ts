import {BasicConnection} from "../../../../gvfcore/components/graphvis/data/databasicconnection";
import {PostDataEntity} from "../post";
import {TagDataEntity} from "../tag";
import {ResourceDataEntity} from "../resource";
export class PostResourceConnection extends BasicConnection {

    protected static dataList:PostResourceConnection[] = [];


    /**
     * Learner constructor
     * @param data Holds an id and at least a 'name' property by current definition
     */
    constructor(post:PostDataEntity, resource:ResourceDataEntity, data:Object) {
        let id = PostResourceConnection.getDataList().length;
        super(id, post, resource, data);

        PostResourceConnection.dataList.push(this);
    }

    public getPost():PostDataEntity {
        return this.entitySrc;
    }

    public getResource():ResourceDataEntity {
        return this.entityDst;
    }

    /**
     * Get all Connecitons
     * @returns {BasicConnection[]}
     */
    public static getDataList():PostResourceConnection[] {
        return PostResourceConnection.dataList;
    }
}