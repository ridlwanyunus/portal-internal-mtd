import { Search } from "./search.model";
import { Order } from "./order.model";
import { Column } from "./column.model";

export class DtRequest {
    columns: Column[];
    draw: number;
    length: number;
    order: Order[];
    search: Search;
    start: number;
    
    public constructor(
        columns: Column[],
        draw: number,
        length: number,
        order: Order[],
        search: Search,
        start: number
    ) {
        this.columns = columns;
        this.draw = draw;
        this.length = length;
        this.order = order;
        this.search = search;
        this.start = start;
    }
}


