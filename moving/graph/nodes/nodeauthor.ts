
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
import {AuthorDataEntity} from "../data/author";
export class NodeAuthor extends NodeMoving {

    public static IDENTIFIER = "Node Author";
    public static NODE_COLOR:number = 0xABD9E9;

    constructor(x:number, y:number, dataEntity:AuthorDataEntity, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);

        this.labelIconPath = "moving/assets/icon_author.png";
        this.color = NodeAuthor.NODE_COLOR;
        this.highlightColor = 0x008837;
        this.setColor(this.color);
        this.name = NodeAuthor.IDENTIFIER;

        this.hoverText = this.dataEntity.getData("name");
    }
}