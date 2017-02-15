

import {GraphLayoutFdl} from "../../../gvfcore/components/graphvis/graphs/layouts/graphlayoutfdl";
export class GraphLayoutFdlCompleteMovingGraph extends GraphLayoutFdl {

    protected NODE_REPULSION_FACTOR =1;
    protected EDGE_FORCE_FACTOR =2000;
    protected VELOCITY = 20;
    protected WALL_REPULSION_FACTOR = 100;
    protected ITERATIONS = 150;
    protected VEOLOCITY_REDUCTION_DAMPING = 4000;

}