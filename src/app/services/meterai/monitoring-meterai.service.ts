import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class MonitoringMeteraiService {

  constructor(private http: HttpClient) {

  }

  users() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
