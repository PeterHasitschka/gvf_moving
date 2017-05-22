import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
import {GRAPH_ELEMENT_LABEL_TYPE} from "../../../gvfcore/components/graphvis/graphs/graphelementabstract";
import {YearDataEntity} from "../data/year";
export class NodeYear extends NodeMoving {

    public static IDENTIFIER = "Node Year";

    constructor(x:number, y:number, dataEntity:YearDataEntity, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);
        this.color = 0xFF7171;
        this.highlightColor = 0xDC6262;
        this.setColor(this.color);
        this.name = NodeYear.IDENTIFIER;

        this.labelType = GRAPH_ELEMENT_LABEL_TYPE.TEXT;
        this.labelZoomLevelMin = 1;
        this.labelText = '\'' + dataEntity.getData("year").toString().substring(2, 4);
        this.labelTextColor = "white";

        this.hoverText = this.dataEntity.getData("year");
    }

}