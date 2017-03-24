import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
export class DocumentDataEntity extends BasicEntity {


    protected static dataList:DocumentDataEntity[] = [];


    /**
     * Entity constructor
     * @param hitObject Complete Data object of containing e.g. _type, _source, etc.
     */
    constructor(hitObject:Object) {
        //let id = DocumentDataEntity.dataList.length;
        let id = parseInt(hitObject['_id']);
        super(id, hitObject);
        DocumentDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return DocumentDataEntity.dataList;
    }
}