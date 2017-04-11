import {GvfPluginInterface} from "../plugins/plugininterface";
import {GraphVisConfig} from "../gvfcore/components/graphvis/config";

import {UiService} from "../gvfcore/services/ui.service";
import {MovingDataService} from "./movingdata.service";
import {PluginApi} from "../gvfcore/api/gvfpluginapi";

import {ApiService} from "../gvfcore/services/apiservice";

import {MovingAutoDocAffGraph} from "./graph/graphs/movingautodocaff";
import {MovingAutoGraph} from "./graph/graphs/movingautocomplete";
import {MovingStarChart} from "./graph/starchart/movingstarchart";



export class MovingPluginApi implements GvfPluginInterface {
    constructor() {
        UiService.consolelog("Created MOVING API Plugin", this, null, 4);

        GraphVisConfig.scene.backplane.color = "#FFFFFF";
        GraphVisConfig.environment.title = "<i>MOVING</i> Search Result Graph-Visualisation";
        GraphVisConfig.environment.showleftcol = false;

        GraphVisConfig.graphelements.metanode.type = MovingStarChart;

        UiService.consolelog("Registering Data Incoming event (datafrommovingplatform)", this);
        ApiService.getInstance().registerEvent("datafrommovingplatform", function (d) {
            console.log("Got RAW SEARCH RESULT DATA FROM MOVINGPLATFORM:", d);
            MovingDataService.getInstance().getDataSource().setData(d);

            PluginApi.addPlane('Automatic MOVING Graph', MovingAutoGraph);
            PluginApi.addPlane('MOVING DOCS-AFFILIATIONS', MovingAutoDocAffGraph);
            // PluginApi.addPlane('MOVING Aggregated Nodes', MovingAutoGraph);
            // PluginApi.addPlane('MOVING Graph Navigation', MovingAutoGraph);
        });
    }

    /**
     * Run after plugin was initialized
     */
    public runAfterInit() {
    }


}