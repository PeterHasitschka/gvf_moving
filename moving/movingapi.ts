import {GvfPluginInterface} from "../plugins/plugininterface";
import {GraphVisConfig} from "../gvfcore/components/graphvis/config";

import {UiService} from "../gvfcore/services/ui.service";
import {SideInfoPositions, SideInfoContentType, SideInfoModel} from "../gvfcore/components/app/sideinfo/sideinfomodel";
import {MovingDataService} from "./movingdata.service";
import {PluginApi} from "../gvfcore/api/gvfpluginapi";
import {CompleteMovingGraph} from "./graph/graphs/completegraph";
import {GraphBipartiteProjectionAbstract} from "../gvfcore/components/graphvis/graphs/graphbipartiteprojectionabstract";
import {PostsTagsGraphBPProj} from "./graph/graphs/poststags_bipartite";
import {ApiService} from "../gvfcore/services/apiservice";


export class MovingPluginApi implements GvfPluginInterface {
    constructor() {
        UiService.consolelog("Created MOVING API Plugin", this, null, 4);

        ApiService.getInstance().registerEvent("datafrommovingplatform", function (d) {
            console.log("Got RAW SEARCH RESULT DATA FROM MOVINGPLATFORM:", d);
            MovingDataService.getInstance().getDataSource().setData(d);
            PluginApi.addPlane('MOVING Platform Search Results', CompleteMovingGraph);
        });
    }

    /**
     * Run after plugin was initialized
     */
    public runAfterInit() {
    }


}