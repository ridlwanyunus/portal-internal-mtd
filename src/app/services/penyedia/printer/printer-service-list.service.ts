import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../../model/response-template.model';

@Injectable({
  providedIn: 'root'
})
export class PrinterServiceListService {

  httpOptions = {}
  url = 'http://localhost:8082';//'http://36.94.117.75:8080';

  constructor(private http: HttpClient) { }

  addDistributor(formData: FormData): Observable<unknown>{
    let endpoint = this.url + '/register/distributor/add';
    
    return this.http.post<ResponseTemplate>(endpoint, formData).pipe(catchError((err: HttpErrorResponse) => {
        debugger;
        return throwError(()=>err) ;
    }));

  }

  getListPrinter(start: number, length: number, search: string): Observable<unknown>{
    // let endpoint = this.url + '/register/printercertified/list';
    let endpoint = this.url + '/printercertified/list';

    let exampleRequest = {
      "columns": [
        {
          "data": "string",
          "name": "string",
          "orderable": true,
          "search": {
            "regex": true,
            "value": "string"
          },
          "searchValue": "string",
          "searchable": true
        }
      ],
      "draw": 0,
      "length": length,
      "order": [
        {
          "column": 0,
          "dir": "string"
        }
      ],
      "search": {
        "regex": true,
        "value": search
      },
      "start": start
    }

    return this.http.post(endpoint, exampleRequest, this.httpOptions)
      .pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }))
  }
}
