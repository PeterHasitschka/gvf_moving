import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
export class NodeDoc extends NodeMoving {

    public static IDENTIFIER = "Node Document";

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);


        this.color = 0xaaeeff;
        this.highlightColor = 0x88ccff;
        this.setColor(this.color);
        this.name = NodeDoc.IDENTIFIER;
    }
}