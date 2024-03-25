import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTemplate } from '../../../model/response-template.model';

@Injectable({
  providedIn: 'root'
})
export class CartridgeServiceListService {

  httpOptions = {}
  url = 'http://36.94.117.75:8080';

  constructor(private http: HttpClient) { }

  addCartridge(request: any): Observable<unknown>{
    let endpoint = this.url + '/register/cartridgecertified/add';
    console.log(request);
    return this.http.post<ResponseTemplate>(endpoint, request , {}).pipe(catchError((err: HttpErrorResponse) => {
        //debugger;
        return throwError(()=>err) ;
    }));

  }

  getListCartridge(start: number, length: number, search: string): Observable<unknown>{
    // let endpoint = this.url + '/register/printercertified/list';
    let endpoint = this.url + '/register/cartridgecertified/list';

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

  getListDataDistributor(): Observable<unknown>{
    let endpoint = this.url + '/register/distributor/listKdDistributor';
    return this.http.get<ResponseTemplate>(endpoint).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(() => err);
    }));
  }

  updateStatusCartridge(id: string, noSertfikasi: string, status: string, keterangan: string): Observable<unknown>{
    let endpoint = this.url + '/register/cartridgecertified/updatedstatus';
    let body = {};
    let queryParam = new HttpParams();
    queryParam = queryParam.append("id", id);
    queryParam = queryParam.append("noCertified", noSertfikasi);
    queryParam = queryParam.append("status", status);
    queryParam = queryParam.append("keterangan", keterangan);

    return this.http.put<ResponseTemplate>(endpoint, body, { params: queryParam }).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(() => err)
    }))
  }
}
