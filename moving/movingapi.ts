import {GvfPluginInterface} from "../plugins/plugininterface";
import {GraphVisConfig} from "../gvfcore/components/graphvis/config";

import {UiService} from "../gvfcore/services/ui.service";
import {MovingDataService} from "./movingdata.service";
import {PluginApi} from "../gvfcore/api/gvfpluginapi";

import {ApiService} from "../gvfcore/services/apiservice";

import {MovingAutoDocAffGraph} from "./graph/graphs/movingautodocaff";
import {MovingAutoGraph} from "./graph/graphs/movingautocomplete";
import {MovingStarChart} from "./graph/starchart/movingstarchart";
import {SideInfoPositions, SideInfoContentType, SideInfoModel} from "../gvfcore/components/app/sideinfo/sideinfomodel";


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


        UiService.getInstance().addSideInfoElement(new SideInfoModel(
            '<i class="fa fa-info-circle" aria-hidden="true"></i> Legend',
            SideInfoPositions.Right,
            SideInfoContentType.Text,
            {
                text: "<div class='moving-legend-line'><div class='moving-legend-node moving-legend-documentnode'></div><span>Document</span></div>" +
                "<div class='moving-legend-line'><div class='moving-legend-node moving-legend-authornode'></div><span>Author</span></div>" +
                "<div class='moving-legend-line'><div class='moving-legend-node moving-legend-affnode'></div><span>Affiliation</span></div>"
            },
            1
            )
        )
        ;
    }

    /**
     * Run after plugin was initialized
     */
    public runAfterInit() {
    }


}