import { Injectable } from '@angular/core';

declare var KTToastrDemo: any;
@Injectable({
  providedIn: 'root'
})
export class ShowMessageService {

  constructor() { }

  success(message: string): void {
    KTToastrDemo.success(message);
  }

  error(message: string): void {
    KTToastrDemo.error(message);
  }
}
