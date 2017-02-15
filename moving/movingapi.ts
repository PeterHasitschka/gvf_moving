import {GvfPluginInterface} from "../plugins/plugininterface";
import {GraphVisConfig} from "../gvfcore/components/graphvis/config";

import {UiService} from "../gvfcore/services/ui.service";
import {SideInfoPositions, SideInfoContentType, SideInfoModel} from "../gvfcore/components/app/sideinfo/sideinfomodel";
import {MovingDataService} from "./movingdata.service";
import {GvfApi} from "../gvfcore/api/gvfapi";
import {CompleteMovingGraph} from "./graph/graphs/completegraph";
import {GraphBipartiteProjectionAbstract} from "../gvfcore/components/graphvis/graphs/graphbipartiteprojectionabstract";
import {PostsTagsGraphBPProj} from "./graph/graphs/poststags_bipartite";


export class MovingApi implements GvfPluginInterface {
    constructor() {
        UiService.consolelog("Created MOVING API Plugin", this, null, 4);
        // GraphVisConfig.graphelements['resourcenode'] = {
        //     color: 0xffffcc,
        //     highlightcolor: 0xff4422
        // };
        // GraphVisConfig.graphelements['learnernode'] = {
        //     color: 0x008800
        // };
        //
        // GraphVisConfig.graphelements['learningcommunity'] = {
        //     segments: 128,
        //     size: 50,
        //     color: 0x3333aa,
        //     highlight_color: 0xFF5555,
        //     z_pos: 0.0
        // };
        // GraphVisConfig.graphelements['communicationcommunity'] = {
        //     segments: 128,
        //     size: 50,
        //     color: 0x33aa33,
        //     highlight_color: 0xFF5555,
        //     z_pos: 0.0
        // };
        //
        // GraphVisConfig["afel"] = {
        //     samelearning_tolerance: 0.95,
        //     resourcegraph_background: 0x8888aa
        // }

    }


    public runAfterInit() {

        MovingDataService.getInstance().fetchData().then(() => {
            GvfApi.addPlane('Demo BIBSONOMY', CompleteMovingGraph);
            //GvfApi.addPlane('Bipartite Projection Posts -> Tags', PostsTagsGraphBPProj);
        });

        // AfelData.getInstance().fetchData().then(() => {
        //     GvfApi.addPlane('<i class="fa fa-book" aria-hidden="true"></i> <strong>Resource</strong> ' +
        //         'Graph - Connecting resources with same learners ' + toleranceStr, ResourceGraph);
        //     // GvfApi.addPlane('<i class="fa fa-book" aria-hidden="true"></i> <strong>Resource</strong> ' +
        //     //     'Graph - <strong>BIPARTITE PROJECTION</strong>', ResourceGraphBPProj);
        //     GvfApi.addPlane('<i class="fa fa-user" aria-hidden="true"></i> <strong>Learner</strong> ' +
        //         'Graph - Connecting learners who learn the same ' + toleranceStr, LearnerGraph);
        //     // GvfApi.addPlane('<i class="fa fa-book" aria-hidden="true"></i> <strong>Learner</strong> ' +
        //     //     'Graph - <strong>BIPARTITE PROJECTION</strong>', LearnerGraphBPProj);
        //     GvfApi.addPlane('<i class="fa fa-users" aria-hidden="true"></i> <strong>Learning</strong> Communities',
        //         LearningCommunityGraph);
        //     GvfApi.addPlane('<i class="fa fa-users" aria-hidden="true"></i> <strong>Communication</strong> Communities',
        //         CommunicationCommunityGraph);
        // });


        UiService.getInstance().addSideInfoElement(new SideInfoModel(
            '<i class="fa fa-info-circle" aria-hidden="true"></i> MOVING',
            SideInfoPositions.Left,
            SideInfoContentType.Text,
            {
                text: 'Preliminary MOVING implementation of GVF'
            }
            )
        );

    }


}