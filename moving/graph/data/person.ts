import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
export abstract class PersonDataEntity extends BasicEntity {


    protected static dataList:PersonDataEntity[] = [];


    /**
     * Entity constructor
     */
    constructor(id, protected name:string, protected email:string, sourceObject:Object) {
        super(id, sourceObject);
        PersonDataEntity.dataList.push(this);
    }


    /**
     * Get all Entity
     * @returns {BasicEntity[]}
     */
    public static getDataList():BasicEntity[] {
        return PersonDataEntity.dataList;
    }

    public getName() {
        return this.name;
    }

    public getEmailAddress() {
        return this.email;
    }

    public static getByEmailAddress(mailadress:string) {
        let foundP:PersonDataEntity = null;
        let BreakException = {};
        try {
            PersonDataEntity.getDataList().forEach((p:PersonDataEntity) => {
                if (p.getEmailAddress() === mailadress) {
                    foundP = p;
                    throw BreakException;
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
        return foundP;
    }

}