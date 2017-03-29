import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
export class AffiliationDataEntity extends BasicEntity {


    protected static dataList:AffiliationDataEntity[] = [];
    protected name;

    /**
     * Entity constructor
     * @param affiliationObject Object holding affiliation data
     */
    constructor(affiliationObject:Object) {
        let id = AffiliationDataEntity.dataList.length;
        super(id, affiliationObject);
        AffiliationDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return AffiliationDataEntity.dataList;
    }


    public getName() {
        return this.data['name'];
    }

    public static getByName(afilliationstr:string) {
        let foundAff:AffiliationDataEntity = null;
        let BreakException = {};
        try {
            AffiliationDataEntity.getDataList().forEach((aff:AffiliationDataEntity) => {
                if (aff.getName() === afilliationstr) {
                    foundAff = aff;
                    throw BreakException;
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
        return foundAff;
    }
}