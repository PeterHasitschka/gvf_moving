import {GraphAbstract} from "../../../gvfcore/components/graphvis/graphs/graphabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {PostResourceConnection} from "../data/connections/postResource";
import {NodePost} from "../nodes/nodepost";
import {EdgeBasic} from "../../../gvfcore/components/graphvis/graphs/edges/edgeelementbasic";
import {TagDataEntity} from "../data/tag";
import {NodeTag} from "../nodes/nodetag";
import {PostTagConnection} from "../data/connections/postTag";
import {GraphLayoutFdlCompleteMovingGraph} from "../layouts/completegraphfdl";
import {EdgeMovingPostTag} from "../edges/edgeposttag";
import {ResourceDataEntity} from "../data/resource";
import {NodeResource} from "../nodes/noderesource";
export class CompleteMovingGraph extends GraphAbstract {

    constructor(protected plane:Plane) {
        super(plane);

        this.layoutClass = GraphLayoutFdlCompleteMovingGraph;
    }

    public init() {
        super.init();

        let tags = TagDataEntity.getDataList();

        tags.forEach((t:TagDataEntity, idx) => {
            let tagNode = new NodeTag(0, 0, t, this.plane, {});
            this.graphElements.push(tagNode);
            this.plane.getGraphScene().addObject(tagNode);

            let tagConn = t.getConnections();
            tagConn.forEach((c) => {
                if (c.constructor !== PostTagConnection)
                    return;

                let post = (<PostResourceConnection>c).getPost();

                /**
                 * Be sure to create post node only once!
                 */
                let postNode:NodePost;
                post.getRegisteredGraphElements().forEach((pn:NodePost) => {
                    if (!postNode && pn.getPlane().getGraph() === this) {
                        postNode = pn;
                    }
                });
                if (!postNode) {
                    postNode = new NodePost(0, 0, post, this.plane, {});
                    this.graphElements.push(postNode);
                    this.plane.getGraphScene().addObject(postNode);
                }

                let edge = new EdgeMovingPostTag(tagNode, postNode, this.plane);
                postNode.addEdge(edge);
                tagNode.addEdge(edge);
                this.edges.push(edge);
                this.plane.getGraphScene().addObject(edge);
            });
        });


        // let resources = ResourceDataEntity.getDataList();
        // resources.forEach((r:ResourceDataEntity) => {
        //
        //     console.log(r.getConnections());
        //
        //     let resNode = new NodeResource(0,0,r,this.plane, {});
        //     this.graphElements.push(resNode);
        //     this.plane.getGraphScene().addObject(resNode);
        //
        //
        // });



        console.log("created " + this.graphElements.length + " nodes");


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