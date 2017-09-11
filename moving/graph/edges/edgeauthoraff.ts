
import {EdgeColored} from "../../../gvfcore/components/graphvis/graphs/edges/edgeelementcolored";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {HelperService} from "../../../gvfcore/services/helper.service";
import {NodeAuthor} from "../nodes/nodeauthor";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
/**
 * A colored edge.
 * Differs from the basic edge, that it further takes a parameter for an initial color
 */
export class EdgeMovingAuthorAffiliation extends EdgeColored {

    protected static opacity = 0.5;

    constructor(sourceNode:NodeAbstract, destNode:NodeAbstract, plane:Plane) {
        let color = HelperService.getInstance().rgbColorMidPoint(NodeAuthor.NODE_COLOR,NodeAffiliation.NODE_COLOR);
        let rgb = HelperService.getInstance().colorHexToRGB(color);
        color = HelperService.getInstance().rgbToHex(rgb.r * 0.9, rgb.g * 0.9, rgb.b * 0.9);
        super(sourceNode, destNode, plane, color);
        this.setColor(color);
        this.setOpacity(this.constructor['opacity']);
    }
}