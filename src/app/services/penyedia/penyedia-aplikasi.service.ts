import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { DtRequest } from '../../model/datatables/dt-request.model';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../model/response-template.model';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class PenyediaAplikasiService {

  httpOptions = {}
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addDistributor(formData: FormData): Observable<unknown>{
    let endpoint = this.url + '/register/distributor/add';
    
    return this.http.post<ResponseTemplate>(endpoint, formData).pipe(catchError((err: HttpErrorResponse) => {
        debugger;
        return throwError(()=>err) ;
    }));

  }

  getDistributor(): Observable<unknown>{
    let endpoint = this.url + '/register/distributor/list';

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
      "length": 100,
      "order": [
        {
          "column": 0,
          "dir": "string"
        }
      ],
      "search": {
        "regex": true,
        "value": ""
      },
      "start": 0
    }

    return this.http.post(endpoint, exampleRequest, this.httpOptions)
      .pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }))
  }

  getChannel(): Observable<unknown>{
    let endpoint = this.url + '/register/channel/list';
    return this.http.get<ResponseTemplate>(endpoint).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(() => err);
    }));
  }

  updateStatus(id: string, status: string): Observable<unknown>{
    let endpoint = this.url + '/register/distributor/updatestatus';
    let body = {};
    let queryParam = new HttpParams();
    queryParam = queryParam.append("id", id);
    queryParam = queryParam.append("status", status);

    return this.http.put<ResponseTemplate>(endpoint, body, { params: queryParam }).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(() => err)
    }))
  }
}
