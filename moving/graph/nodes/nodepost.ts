import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphVisConfig} from "../../../gvfcore/components/graphvis/config";
export class NodePost extends NodeAbstract {

    public static IDENTIFIER = "Node Post";

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);


        this.color = 0xff0000;
        this.highlightColor = 0xffff00;
        this.setColor(this.color);
        this.name = NodePost.IDENTIFIER;
    }
}