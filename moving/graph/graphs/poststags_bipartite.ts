import {EdgeAbstract} from "../../../gvfcore/components/graphvis/graphs/edges/edgeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphBipartiteProjectionAbstract} from "../../../gvfcore/components/graphvis/graphs/graphbipartiteprojectionabstract";
import {NodePost} from "../nodes/nodepost";
import {EdgeMovingPostTag} from "../edges/edgeposttag";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {PostDataEntity} from "../data/post";
import {TagDataEntity} from "../data/tag";
import {PostTagConnection} from "../data/connections/postTag";

/**
 * The resource graph shows relations between Learning-Resources
 * Thus its Data consists of @see{Resource} data objects.
 * @author Peter Hasitschka
 */
export class PostsTagsGraphBPProj extends GraphBipartiteProjectionAbstract {

    protected edges:EdgeAbstract[];
    protected weightLimit = 2;

    constructor(protected plane:Plane) {
        super(plane);


        this.nodetype = NodePost;
        this.bipartiteEdgeType = EdgeMovingPostTag;
        this.layoutClass = GraphLayoutFdlCompleteMovingGraph;

        //this.plane.setBackgroundColor(GraphVisConfig["afel"].resourcegraph_background);
    }

    protected getPrimaryData():PostDataEntity[] {
        return PostDataEntity.getDataList();
    }

    protected getSecondaryData():TagDataEntity[] {
        return TagDataEntity.getDataList();
    }

    protected getConnectionsData():PostTagConnection[] {
        return PostTagConnection.getDataList();
    }

    /**
     * Adding event listeners for hovered and un-hovered learner(!) graphelements but also for same graphelements
     */
    protected addEventListeners() {
        super.addEventListeners();
    }


    public init():void {
        super.init();
    }
}
