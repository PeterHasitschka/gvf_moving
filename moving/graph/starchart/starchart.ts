import {Pie} from "./pie";
import {MetanodeAbstract} from "../../../gvfcore/components/graphvis/graphs/metanodes/metanodeabstract";
import {NodeDoc} from "../nodes/nodedoc";
import {NodeAuthor} from "../nodes/nodeauthor";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
export class StarChart extends MetanodeAbstract {


    protected static startChartConfig = {

        nodeOrder: [
            NodeDoc,
            NodeAuthor,
            NodeAffiliation
        ]
    };


    constructor(x:number, y:number, nodes:NodeAbstract[], plane:Plane) {
        super(x, y, nodes, plane, {'size': 50});
        this.name = "Start Chart Meta-Node";
    }


    protected createMeshs(options) {

        let sortedNodes = {};
        StarChart.startChartConfig.nodeOrder.forEach((nodeClass) => {
            sortedNodes[nodeClass.name] = [];
        });
        this.nodes.forEach((n:NodeAbstract) => {
            let nodeTypeIndentifier = n.constructor.name;
            sortedNodes[nodeTypeIndentifier].push(n);
        });

        // HOLDING EVERYTHING!
        let group = new THREE.Group();
        let startAngleRad = 0.0;
        StarChart.startChartConfig.nodeOrder.forEach((nodeClass) => {

            if (!sortedNodes[nodeClass.name].length)
                return;

            let color = sortedNodes[nodeClass.name][0].getColor();

            let factorUsed = sortedNodes[nodeClass.name].length / this.nodes.length;
            let endAngleRad = startAngleRad + factorUsed * Math.PI * 2;
            console.log(nodeClass.name, sortedNodes[nodeClass.name].length);

            let pieMesh = new Pie(startAngleRad, endAngleRad, 100, color);
            group.add(pieMesh);
            startAngleRad = endAngleRad;
        });

        this.meshs['stargroup'] = group;
    }
}
