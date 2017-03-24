import {GraphAbstract} from "../../../gvfcore/components/graphvis/graphs/graphabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {EdgeMovingPostTag} from "../edges/edgeposttag";
import {DocumentDataEntity} from "../data/document";
import {NodeDoc} from "../nodes/nodedoc";
import {DocAuthorConnection} from "../data/connections/docauthor";
import {NodeAuthor} from "../nodes/nodeauthor";
export class CompleteMovingGraph extends GraphAbstract {

    constructor(protected plane:Plane) {
        super(plane);

        this.layoutClass = GraphLayoutFdlCompleteMovingGraph;
    }


    public init() {
        super.init();

        let docs = DocumentDataEntity.getDataList();
        docs.forEach((d:DocumentDataEntity) => {
            let docNode = new NodeDoc(0, 0, d, this.plane, {});
            this.graphElements.push(docNode);
            this.plane.getGraphScene().addObject(docNode);

            let authorConnections = d.getConnections();
            authorConnections.forEach((c) => {
                if (c.constructor !== DocAuthorConnection)
                    return;

                let author = (<DocAuthorConnection>c).getAuthor();

                /**
                 * Be sure to create post node only once!
                 */
                let authorNode:NodeAuthor;
                author.getRegisteredGraphElements().forEach((na:NodeAuthor) => {
                    if (!authorNode && na.getPlane().getGraph() === this) {
                        authorNode = na;
                    }
                });
                if (!authorNode) {
                    authorNode = new NodeAuthor(0, 0, author, this.plane, {});
                    this.graphElements.push(authorNode);
                    this.plane.getGraphScene().addObject(authorNode);
                }

                let edge = new EdgeMovingPostTag(docNode, authorNode, this.plane);
                docNode.addEdge(edge);
                authorNode.addEdge(edge);
                this.edges.push(edge);
                this.plane.getGraphScene().addObject(edge);
            });

        });

        this.setLayout();
    }

    private setLayout() {
        this.layout = new this.layoutClass(this.plane, this.graphElements, this.edges);
        this.layout.setInitPositions(() => {
            this.layout.calculateLayout(function () {
                console.log("Finished calculating layout");
                this.plane.getGraphScene().render();
                this.addEventListeners();
            }.bind(this));
        });
    }
}