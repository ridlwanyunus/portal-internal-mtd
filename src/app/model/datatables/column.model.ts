import { Search } from "./search.model";

export class Column {
    data: string;
    name: string;
    orderable: boolean;
    search: Search;
    searchValue: string;
    searchable: boolean;

    constructor(
        data: string,
        name: string,
        orderable: boolean,
        search: Search,
        searchValue: string,
        searchable: boolean,
    ){
        this.data = data;
        this.name = name;
        this.orderable = orderable;
        this.search = search;
        this.searchValue = searchValue;
        this.searchable = searchable;
    }
}
