import {GraphAbstract} from "../../../gvfcore/components/graphvis/graphs/graphabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {EdgeMovingPostTag} from "../edges/edgeposttag";
import {DocumentDataEntity} from "../data/document";
import {NodeDoc} from "../nodes/nodedoc";
import {DocAuthorConnection} from "../data/connections/docauthor";
import {NodeAuthor} from "../nodes/nodeauthor";
import {EdgeMovingDocAuthor} from "../edges/edgedocauthor";
import {AffiliationDataEntity} from "../data/affiliation";
import {NodeAffiliation} from "../nodes/nodeaffiliation";
import {EdgeMovingAuthorAffiliation} from "../edges/edgeauthoraff";
import {BasicEntity} from "../../../gvfcore/components/graphvis/data/databasicentity";
import {NodeAbstract} from "../../../gvfcore/components/graphvis/graphs/nodes/nodeelementabstract";
import {AuthorDataEntity} from "../data/author";
import {BasicConnection} from "../../../gvfcore/components/graphvis/data/databasicconnection";
import {AuthorAffiliationConnection} from "../data/connections/authoraffiliation";
import {AutoGraph} from "../../../gvfcore/components/graphvis/graphs/autograph";
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
            }
        ],
        edges: [
            {
                dataConnection: DocAuthorConnection,
                edge: EdgeMovingDocAuthor
            },
            {
                dataConnection: AuthorAffiliationConnection,
                edge: EdgeMovingAuthorAffiliation
            },
        ]
    };

    constructor(protected plane:Plane) {
        super(plane);
        this.layoutClass = GraphLayoutFdlCompleteMovingGraph;
    }

    public init() {
        super.init();

    }
}