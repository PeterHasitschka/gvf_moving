
import {GroupAbstract} from "../../../gvfcore/components/graphvis/graphs/groups/groupelementabstract";
import {BasicGroup} from "../../../gvfcore/components/graphvis/data/databasicgroup";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeSimple} from "../../../gvfcore/components/graphvis/graphs/nodes/nodelementsimple";
/**
 * A simple group, derived from @see{GroupAbstract}
 * @author Peter Hasitschka
 */
export class MovingMetanode extends GroupAbstract {

    constructor(x:number, y:number, protected dataEntity:BasicGroup, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, NodeSimple, options);
    }
}