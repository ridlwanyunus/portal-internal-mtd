import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../../model/response-template.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringSerialNumberService {

  httpOptions: any = {};
  url: string = 'http://36.94.117.75:9091';

  constructor(
    private http: HttpClient
  ) { }

  getSerialNumberMonitoring(start: number, length: number, search: string): Observable<unknown> {
    let endpoint = this.url + '/api/mon/sngenbubuh';
    let request = {
      "draw": 0,
      "start": start,
      "length": length,
      "search": {
        "value": search,
        "regex": true
      },
      "order": [
        {
          "column": 0,
          "dir": "asc"
        }
      ],
      "columns": [
        {
          "data": "string",
          "name": "string",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "string",
            "regex": true
          },
          "searchValue": "string"
        }
      ],
      "columnsAsMap": {
        "additionalProp1": {
          "data": "string",
          "name": "string",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "string",
            "regex": true
          },
          "searchValue": "string"
        },
        "additionalProp2": {
          "data": "string",
          "name": "string",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "string",
            "regex": true
          },
          "searchValue": "string"
        },
        "additionalProp3": {
          "data": "string",
          "name": "string",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "string",
            "regex": true
          },
          "searchValue": "string"
        }
      }
    }

    return this.http.post<ResponseTemplate>(endpoint, request, this.httpOptions)
      .pipe(catchError(
        (err: HttpErrorResponse) => {
          return throwError(() => err)
        }
      ));

  }

}
