import {DataService} from "../gvfcore/services/data.service";
import {MovingDataSourceInterace} from "./data/datasource_interface";
import {MovingDataSourceMovingPlatform} from "./data/movingplatform/datasourcemovingplatform";

export class MovingDataService {

    static instance:MovingDataService;
    static isCreating:Boolean = false;
    private http;
    private data;
    private dataSource:MovingDataSourceInterace;

    private maxResultsToLoad = 200;
    private resultsNumShouldbeLoaded = null;


    constructor() {
        this.data = {posts: [], tags: [], connections: []};
        this.http = DataService.getInstance().getHttp();
        if (!MovingDataService.isCreating) {
            return MovingDataService.getInstance();
        }

        this.dataSource = new MovingDataSourceMovingPlatform();
    }

    static getInstance() {
        if (MovingDataService.instance == null) {
            MovingDataService.isCreating = true;
            MovingDataService.instance = new MovingDataService();
            MovingDataService.isCreating = false;
        }
        return MovingDataService.instance;
    }


    /**
     * Fetching data.
     * @param cb {Function} Optional Callback when ready
     * @returns {null}
     */
    fetchData(cb?:Function) {
        let ret = this.dataSource.getLoadedData();
        if (ret === null)
            ret = this.dataSource.fetchDataFromServer();
        return ret;
    }


    getDataSource() {
        return this.dataSource;
    }

    getMaxResultsToLoad() {
        return this.maxResultsToLoad;
    }

    setResultNumShouldBeLoaded(num) {
        this.resultsNumShouldbeLoaded = num;
    }

    getResultNumShouldBeLoaded() {
        return this.resultsNumShouldbeLoaded;
    }

}