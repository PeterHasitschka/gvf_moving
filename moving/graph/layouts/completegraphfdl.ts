

import {GraphLayoutFdl} from "../../../gvfcore/components/graphvis/graphs/layouts/graphlayoutfdl";
export class GraphLayoutFdlCompleteMovingGraph extends GraphLayoutFdl {

    protected NODE_REPULSION_FACTOR = 10;
    protected EDGE_FORCE_FACTOR = 0.04;
    protected VELOCITY = 1.5;
    protected WALL_REPULSION_FACTOR = 10;
    protected ITERATIONS = 300;
    protected VEOLOCITY_REDUCTION_DAMPING = 3000;
    protected INTERVAL_TO_RENDER = 1;

}