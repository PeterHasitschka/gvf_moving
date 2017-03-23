import {MovingDataSourceInterace} from "../datasource_interface";
export class MovingDataSourceMovingPlatform implements MovingDataSourceInterace {



    constructor(private dataContainer) {
    }

    fetchDataFromServer() {
        return false;
    }


    getLoadedData(){
        return null;
    }

    setData(data){

    }
}