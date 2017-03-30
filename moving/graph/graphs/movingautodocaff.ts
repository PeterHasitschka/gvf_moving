import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {DocumentDataEntity} from "../data/document";
import {NodeDoc} from "../nodes/nodedoc";
import {DocAuthorConnection} from "../data/connections/docauthor";
import {AffiliationDataEntity} from "../data/affiliation";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
import {AutoGraph, AUTOGRAPH_EDGETYPES} from "../../../gvfcore/components/graphvis/graphs/autograph";
import {EdgeBasic} from "../../../gvfcore/components/graphvis/graphs/edges/edgeelementbasic";


export class MovingAutoDocAffGraph extends AutoGraph {


    protected mappingStructure = {
        nodes: [
            {
                data: DocumentDataEntity,
                node: NodeDoc
            },
            {
                data: AffiliationDataEntity,
                node: NodeAffiliation
            }
        ],
        edges: [
            {
                type: AUTOGRAPH_EDGETYPES.BY_FUNCTION,
                fct: this.getAffiliationOfAuthorsByDocNode.bind(this),
                sourceNodeType: NodeDoc,
                edge: EdgeBasic
            }
        ]
    };

    /**
     * Return All Affiliation nodes which are connected to the authors of a doc-node
     * @param nodeDoc
     * @returns {Array}
     */
    protected getAffiliationOfAuthorsByDocNode(nodeDoc:NodeDoc) {
        let affNodesToReturn = [];
        nodeDoc.getDataEntity().getConnections().forEach((c) => {
            if (c.constructor !== DocAuthorConnection)
                return;
            let author = (<DocAuthorConnection>c).getAuthor();
            let affs = author.getAffiliations();
            affs.forEach((aff:AffiliationDataEntity) => {
                aff.getRegisteredGraphElements().forEach((nAff:NodeAffiliation) => {
                    if (nAff.getPlane().getId() !== this.plane.getId())
                        return;
                    affNodesToReturn.push(nAff);
                });
            });
        });
        return affNodesToReturn;
    }



    constructor(protected plane:Plane) {
        super(plane);
        this.layoutClass = GraphLayoutFdlCompleteMovingGraph;
    }

    public init() {
        super.init();

    }
}