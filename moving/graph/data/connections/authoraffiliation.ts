import {BasicConnection} from "../../../../gvfcore/components/graphvis/data/databasicconnection";
import {AuthorDataEntity} from "../author";
import {AffiliationDataEntity} from "../affiliation";
export class AuthorAffiliationConnection extends BasicConnection {

    protected static dataList:AuthorAffiliationConnection[] = [];


    constructor(author:AuthorDataEntity, affiliation:AffiliationDataEntity, data:Object) {
        let id = AuthorAffiliationConnection.getDataList().length;
        super(id, affiliation, author, data);
        AuthorAffiliationConnection.dataList.push(this);
    }

    public getAuthor():AuthorDataEntity {
        return <AuthorDataEntity>this.entitySrc;
    }

    public getAffiliation():AffiliationDataEntity {
        return <AffiliationDataEntity>this.entityDst;
    }

    /**
     * Get all Connecitons
     * @returns {BasicConnection[]}
     */
    public static getDataList():AuthorAffiliationConnection[] {
        return AuthorAffiliationConnection.dataList;
    }
}