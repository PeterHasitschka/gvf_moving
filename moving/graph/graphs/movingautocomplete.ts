import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {DocumentDataEntity} from "../data/document";
import {NodeDoc} from "../nodes/nodedoc";
import {DocAuthorConnection} from "../data/connections/docauthor";
import {NodeAuthor} from "../nodes/nodeauthor";
import {EdgeMovingDocAuthor} from "../edges/edgedocauthor";
import {AffiliationDataEntity} from "../data/affiliation";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
import {EdgeMovingAuthorAffiliation} from "../edges/edgeauthoraff";
import {AuthorDataEntity} from "../data/author";
import {AuthorAffiliationConnection} from "../data/connections/authoraffiliation";
import {AutoGraph, AUTOGRAPH_EDGETYPES} from "../../../gvfcore/components/graphvis/graphs/autograph";
import {YearDataEntity} from "../data/year";
import {NodeYear} from "../nodes/nodeyear";
import {DocYearConnection} from "../data/connections/docyear";
import {EdgeMovingDocYear} from "../edges/edgedocyear";
import {GraphLayoutRandomCompleteMovingGraph} from "../layouts/completegraphrand";
import {GraphLayoutFdlQuadtreeCompleteMovingGraph} from "../layouts/completegraphfdlquadtree";


export class MovingAutoGraph extends AutoGraph {


    protected mappingStructure = {
        nodes: [
            {
                data: DocumentDataEntity,
                node: NodeDoc
            },
            {
                data: AuthorDataEntity,
                node: NodeAuthor
            },
            {
                data: AffiliationDataEntity,
                node: NodeAffiliation
            },
            {
                data: YearDataEntity,
                node: NodeYear
            }
        ],
        edges: [
            {
                type: AUTOGRAPH_EDGETYPES.BY_DATA,
                dataConnection: DocAuthorConnection,
                edge: EdgeMovingDocAuthor
            },
            {
                type: AUTOGRAPH_EDGETYPES.BY_DATA,
                dataConnection: AuthorAffiliationConnection,
                edge: EdgeMovingAuthorAffiliation
            },
            {
                type: AUTOGRAPH_EDGETYPES.BY_DATA,
                dataConnection: DocYearConnection,
                edge: EdgeMovingDocYear
            }
        ],
        paths: []
    };

    constructor(protected plane:Plane) {
        super(plane);
        //this.layoutClass = GraphLayoutFdlCompleteMovingGraph;
        this.layoutClass = GraphLayoutFdlQuadtreeCompleteMovingGraph;
    }

    public init() {
        super.init();

    }
}