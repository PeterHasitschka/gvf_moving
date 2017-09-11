import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
import {DocumentDataEntity} from "../data/document";
export class NodeDoc extends NodeMoving {

    public static IDENTIFIER = "Node Document";
    public static NODE_COLOR:number = 0xFDAE61;

    constructor(x:number, y:number, dataEntity:DocumentDataEntity, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);

        this.labelIconPath = "moving/assets/icon_doc.png";
        this.color = NodeDoc.NODE_COLOR;
        this.highlightColor = 0x008837;
        this.setColor(this.color);
        this.name = NodeDoc.IDENTIFIER;
        this.hoverText = this.dataEntity.getData("title");
    }
}