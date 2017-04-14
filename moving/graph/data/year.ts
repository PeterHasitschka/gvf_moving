import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
export class YearDataEntity extends BasicEntity {


    protected static dataList:YearDataEntity[] = [];

    /**
     * Entity constructor
     * @param year e.g. 2017
     */
    constructor(year:number) {
        let id = YearDataEntity.dataList.length;
        super(id, {year});
        YearDataEntity.dataList.push(this);
    }


    public getData(key:string = null) {
        return super.getData(key);
    }


    /**
     * Get all Entity
     * @returns {YearDataEntity[]}
     */
    public static getDataList():YearDataEntity[] {
        return YearDataEntity.dataList;
    }


    public static getByYear(year:number) {
        let foundY:YearDataEntity = null;
        let BreakException = {};
        try {
            YearDataEntity.getDataList().forEach((y:YearDataEntity) => {
                if (y.getData("year") === year) {
                    foundY = y;
                    throw BreakException;
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
        return foundY;
    }
}