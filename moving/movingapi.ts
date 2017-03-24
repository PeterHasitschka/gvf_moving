import {GvfPluginInterface} from "../plugins/plugininterface";
import {GraphVisConfig} from "../gvfcore/components/graphvis/config";

import {UiService} from "../gvfcore/services/ui.service";
import {MovingDataService} from "./movingdata.service";
import {PluginApi} from "../gvfcore/api/gvfpluginapi";
import {CompleteMovingGraph} from "./graph/graphs/completegraph";

import {ApiService} from "../gvfcore/services/apiservice";


export class MovingPluginApi implements GvfPluginInterface {
    constructor() {
        UiService.consolelog("Created MOVING API Plugin", this, null, 4);

        GraphVisConfig.scene.backplane.color = "#FFFFFF";

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