import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphVisConfig} from "../../../gvfcore/components/graphvis/config";
export abstract class NodeMoving extends NodeAbstract {

    constructor(x:number, y:number, dataEntity:DataAbstract, plane:Plane, options:Object) {
        options['size'] = options['size'] || 10;
        super(x, y, dataEntity, plane, options);
    }
}