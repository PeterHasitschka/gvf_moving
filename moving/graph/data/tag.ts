
import {BasicEntity} from "../../../../gvfcore/components/graphvis/data/databasicentity";
export class TagDataEntity extends BasicEntity {


    protected static dataList:TagDataEntity[] = [];


    /**
     * Entity constructor
     * @param name Name of the tag
     */
    constructor(name:string) {
        let id = TagDataEntity.dataList.length;
        super(id, {name: name});
        TagDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():TagDataEntity[] {
        return TagDataEntity.dataList;
    }

    public getName() {
        return this.getData('name');
    }

    public static getByName(name:string):TagDataEntity {
        let foundT:TagDataEntity = null;
        let BreakException = {};
        try {
            TagDataEntity.getDataList().forEach((t:TagDataEntity) => {
                if (t.getName() === name) {
                    foundT = t;
                    throw BreakException;
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
        return foundT;
    }
}