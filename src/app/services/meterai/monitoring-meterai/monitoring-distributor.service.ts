import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../../model/response-template.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringDistributorService {

  httpOptions = {};
  url = 'http://36.94.117.75:9091';

  constructor(
    private http: HttpClient
  ) {

  }

  // Get List Distributor for Monitoring
  getDistributorMonitoring(start: number, length: number, search: any): Observable<unknown> {
    let endpoint = this.url + '/api/mon/distributor';

    let request = {
        "draw": 0,
        "start": start,
        "length": length,
        "search": {
          "value": search.search1,
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
  getPenggunaMonitoring(start: number, length: number, search: any): Observable<unknown> {
    let endpoint = this.url + '/api/mon/pengguna';

    let request = {
      "draw": 0,
      "start": start,
      "length": length,
      "search": {
        "value": search.search1,
        "regex": true
      },
      "search2": {
        "value": search.search2,
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

  getSerialNumberMonitoringHeader(){

  }

  getSerialNumberMonitoring(start: number, length: number, search: any){
    let endpoint = this.url + '/api/mon/detailmeterai';

    let request = {
      "draw": 0,
      "start": start,
      "length": length,
      "search": {
        "value": search.search1, // npwp pemungut ex: 010000115051000
        "regex": true
      },
      "search2": {
        "value": search.search2, // Kode Distributor ex: 000
        "regex": true
      },
      "search3": {
        "value": search.search3, // tahun masa ex: 202403
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
          return throwError(() => err);
        }
      ));
  }
}
