import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../../model/response-template.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringPenggunaService {
  url = 'http://36.94.117.75:9091';
  httpOptions: any = {}

  constructor(
    private http: HttpClient
  ) { }

  // Get List Pengguna Header for Monitoring
  getPenggunaMonitoringHeader(idDistributor: string): Observable<unknown> {
    let endpoint = this.url + '/api/mon/pengguna/header';

    let queryParam = new HttpParams();
    queryParam = queryParam.append("dist", idDistributor);

    return this.http.post<ResponseTemplate>(endpoint, {}, { params: queryParam })
      .pipe(catchError(
        (err: HttpErrorResponse) => {
          return throwError(() => { err })
        }
      ));
  }

  // Get List Pengguna for Monitoring
  getPenggunaMonitoring(start: number, length: number, search: string): Observable<unknown> {
    let endpoint = this.url + '/api/mon/pengguna';

    let request = {
      "draw": 0,
      "start": start,
      "length": length,
      "search": {
        "value": search,
        "regex": true
      },
      "search2": {
        "value": "string",
        "regex": true
      },
      "order": [
        {
          "column": 0,
          "dir": "desc"
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
          return throwError(() => { err })
        }
      ));
  }
}
