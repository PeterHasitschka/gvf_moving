import {EdgeColored} from "../../../gvfcore/components/graphvis/graphs/edges/edgeelementcolored";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
/**
 * A colored edge.
 * Differs from the basic edge, that it further takes a parameter for an initial color
 */
export class EdgeMovingDocYear extends EdgeColored {

    protected static opacity = 0.5;
    constructor(sourceNode:NodeAbstract, destNode:NodeAbstract, plane:Plane) {
        let color = 0xAA0000;
        super(sourceNode, destNode, plane, color);
        this.setColor(color);
        this.setOpacity(this.constructor['opacity']);
    }
}