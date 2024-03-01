export class Search {
    regex: boolean;
    value: string;

    constructor(
        regex: boolean,
        value: string
    ){
        this.regex = regex
        this.value = value
    }
}
