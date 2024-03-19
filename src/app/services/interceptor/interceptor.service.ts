import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingServiceService } from '../loading/loading-service.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(public loadingService: LoadingServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.isLoading.next(true);

    return next.handle(req).pipe(
      catchError( err => {
        const error = err.message;
        return throwError(() => err);
      }),
      finalize(
        () => {
          this.loadingService.isLoading.next(false);
        }
      )
    )
  }
}
