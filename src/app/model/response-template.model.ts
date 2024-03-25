export class ResponseTemplate {

    data: any = {};
    status: number;
    message: string;
    responseId: string;

    constructor(
        data: any = {},
        status: number,
        message: string,
        responseId: string
    ){
        this.status = status;
        this.message = message;
        this.data = data;
        this.responseId = responseId
    }
}
