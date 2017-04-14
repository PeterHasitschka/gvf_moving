import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
export class NodeYear extends NodeMoving {

    public static IDENTIFIER = "Node Year";

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);
        this.color = 0xaa0000;
        this.highlightColor = 0x880000;
        this.setColor(this.color);
        this.name = NodeYear.IDENTIFIER;
    }
}