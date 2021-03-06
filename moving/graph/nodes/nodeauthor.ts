
import {DataAbstract} from "../../../gvfcore/components/graphvis/data/dataabstract";
import {Plane} from "../../../gvfcore/components/plane/plane";
import {NodeMoving} from "./nodemoving";
import {AuthorDataEntity} from "../data/author";
export class NodeAuthor extends NodeMoving {

    public static IDENTIFIER = "Node Author";

    constructor(x:number, y:number, dataEntity:AuthorDataEntity, plane:Plane, options:Object) {
        super(x, y, dataEntity, plane, options);

        this.labelIconPath = "moving/assets/icon_author.png";

        this.color = 0xffe6d5;
        this.highlightColor = 0xffc4B3;
        this.setColor(this.color);
        this.name = NodeAuthor.IDENTIFIER;

        this.hoverText = this.dataEntity.getData("name");
    }
}