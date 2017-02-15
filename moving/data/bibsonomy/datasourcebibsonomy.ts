import {UiService} from "../../../gvfcore/services/ui.service";
import {DataService} from "../../../gvfcore/services/data.service";
import {MovingDataSourceInterace} from "../datasource_interface";
import {ResourceDataEntity} from "../../graph/data/resource";
import {PostDataEntity} from "../../graph/data/post";
import {TagDataEntity} from "../../graph/data/tag";
import {PostTagConnection} from "../../graph/data/connections/postTag";
import {PostResourceConnection} from "../../graph/data/connections/postResource";

export class MovingDataSourceBibsonomy implements MovingDataSourceInterace {

    private http = DataService.getInstance().getHttp();
    private file = 'moving/data/bibsonomy/bib_pubs_2_perc.json';


    constructor(private dataContainer) {
    }

    /**
     * Fetching and returning learners, resources, and activities from the server.
     * Returned as Promise.
     * @returns {Promise<TResult>}
     */
    fetchDataFromServer() {

        UiService.consolelog("Fetching learning-platform data from server...", this, null, 5);

        return this.http.get(this.file)
            .map(res => res.json())
            .toPromise()
            .then((r) => {


                r.forEach((row) => {

                    let resourceId = parseInt(row['url']);
                    let resource = ResourceDataEntity.getObject(resourceId);
                    if (resource === null)
                        resource = new ResourceDataEntity(resourceId, {});
                    let post = new PostDataEntity({});

                    let tags = row['tags'];
                    tags.forEach((tstr) => {

                        let tag = TagDataEntity.getByName(tstr);
                        if (tag === null)
                            tag = new TagDataEntity(tstr);

                        let tagPostConnection = new PostTagConnection(post, tag, {});
                        post.addConnection(tagPostConnection);
                        tag.addConnection(tagPostConnection);
                    });

                    let postResConnection = new PostResourceConnection(post, resource, {});
                    post.addConnection(postResConnection);
                    resource.addConnection(postResConnection);

                    // let learner = new Learner(resultdata["id"], resultdata);
                    // this.dataContainer.learners.push(learner);

                });
                //console.log("Fetched Learners:", this.data.learners);
                console.log(ResourceDataEntity.getDataList(), TagDataEntity.getDataList(), PostDataEntity.getDataList());
            });
    }

}