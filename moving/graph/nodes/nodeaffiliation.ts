
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
import {AffiliationDataEntity} from "../data/affiliation";
export class NodeAffiliation extends NodeMoving {

    public static IDENTIFIER = "Node Affiliation";

    constructor(x:number, y:number, dataEntity:AffiliationDataEntity, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);

        this.labelIconPath = "moving/assets/icon_aff.png";
        this.color = 0xaaffaa;
        this.highlightColor = 0x88ff88;
        this.setColor(this.color);
        this.name = NodeAffiliation.IDENTIFIER;
        this.hoverText = this.dataEntity.getData("name");
    }
}