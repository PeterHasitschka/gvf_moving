import {MetanodeAbstract} from "../../../gvfcore/components/graphvis/graphs/metanodes/metanodeabstract";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
export class OnionVis extends MetanodeAbstract {


    constructor(x:number, y:number, nodes:NodeAbstract[], plane:Plane) {
        super(x, y, nodes, plane, {'size': 50});
        this.name = "Onion-Vis Meta-Node";
    }


    protected createMeshs(options) {
        super.createMeshs(options);
    }


}
