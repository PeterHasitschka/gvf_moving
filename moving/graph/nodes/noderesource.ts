import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphVisConfig} from "../../../gvfcore/components/graphvis/config";
export class NodeResource extends NodeAbstract {

    public static IDENTIFIER = "Node Resource";

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);


        this.color = 0x0000ff;
        this.highlightColor = 0x00ffff;
        this.setColor(this.color);
        this.name = NodeResource.IDENTIFIER;
    }
}