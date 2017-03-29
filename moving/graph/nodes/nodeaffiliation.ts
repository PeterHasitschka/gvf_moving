
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
export class NodeAffiliation extends NodeMoving {

    public static IDENTIFIER = "Node Affiliation";

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);


        this.color = 0xaaffaa;
        this.highlightColor = 0x88ff88;
        this.setColor(this.color);
        this.name = NodeAffiliation.IDENTIFIER;
    }
}