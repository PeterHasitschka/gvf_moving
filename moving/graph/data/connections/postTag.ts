

import {BasicConnection} from "../../../../gvfcore/components/graphvis/data/databasicconnection";
import {PostDataEntity} from "../post";
import {TagDataEntity} from "../tag";
export class PostTagConnection extends BasicConnection {

    protected static dataList:PostTagConnection[] = [];


    /**
     * Learner constructor
     * @param data Holds an id and at least a 'name' property by current definition
     */
    constructor(post:PostDataEntity, tag:TagDataEntity, data:Object) {
        let id = PostDataEntity.getDataList().length;
        super(id, post, tag, data);

        PostTagConnection.dataList.push(this);
    }

    public getPost():PostDataEntity{
        return <PostDataEntity>this.entitySrc;
    }

    public getTag():TagDataEntity{
        return <TagDataEntity>this.entityDst;
    }

    /**
     * Get all Connecitons
     * @returns {BasicConnection[]}
     */
    public static getDataList():PostTagConnection[] {
        return PostTagConnection.dataList;
    }
}