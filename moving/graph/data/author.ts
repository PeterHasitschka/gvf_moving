import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
import {PersonDataEntity} from "./person";
export class AuthorDataEntity extends PersonDataEntity {


    protected static dataList:AuthorDataEntity[] = [];


    /**
     * Entity constructor
     */
    constructor(sourceObject:Object) {
        let id = AuthorDataEntity.dataList.length;
        super(id, sourceObject['name'], sourceObject['email'], sourceObject);
        AuthorDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return AuthorDataEntity.dataList;
    }


}