import {NodeDoc} from "../nodes/nodedoc";
import {NodeAuthor} from "../nodes/nodeauthor";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {StarChart} from "../../../gvfcore/components/graphvis/graphs/metanodes/starchart/starchart";
import {NodeYear} from "../nodes/nodeyear";
export class MovingStarChart extends StarChart {

    constructor(x:number, y:number, nodes:NodeAbstract[], plane:Plane) {

        // The settings are stored in the metanodeabstract as metanodeOptions
        // to be usable within the constructor's sub-method createMeshes
        // We copy the StarChart config and extend it here.
        let config:any = Object.create(StarChart.starChartConfig);
        config.nodes = [
            {
                type: NodeDoc,
                properties: [
                    {
                        property: "docType",
                        color: 0x1b9e77
                    },
                    {
                        property: "language",
                        color: 0xd95f02
                    }
                    // ,
                    // {
                    //     property: "xxx",
                    //     color: 0x7570b3
                    // },
                    // {
                    //     property: "xxx",
                    //     color: 0xe7298a
                    // }
                ]
            },
            {
                type: NodeAuthor,
                properties: []
            },
            {
                type: NodeAffiliation,
                properties: []
            },
            {
                type: NodeYear,
                properties: [
                    // {
                    //     property: "year",
                    //     color: 0x7570b3
                    // }
                ]
            }
        ];

        super(x, y, nodes, plane, config);
        this.name = "MOVING Start Chart Meta-Node";
    }

}
