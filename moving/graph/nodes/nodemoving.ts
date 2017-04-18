import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphVisConfig} from "../../../gvfcore/components/graphvis/config";
import {GRAPH_ELEMENT_LABEL_TYPE} from "../../../gvfcore/components/graphvis/graphs/graphelementabstract";
export abstract class NodeMoving extends NodeAbstract {

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        options['size'] = options['size'] || 10;
        super(x, y, dataEntity, plane, options);

        this.labelType = GRAPH_ELEMENT_LABEL_TYPE.ICON;
        this.labelIconSize = 10;
    }
}