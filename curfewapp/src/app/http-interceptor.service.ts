import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent, HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
          setHeaders: {
            Authorization: sessionStorage.getItem('token')
          }
        });
        return next.handle(req);
        //.pipe(
        //   retry(0),
        //   catchError((error: HttpErrorResponse) => {
        //     let errorMessage = '';
        //     if(error.status==404){
        //       errorMessage='Username or Password not Correct!'
        //     }
        //     else if (error.error instanceof ErrorEvent) {
        //       // client-side error
        //       errorMessage = `Error: ${error.error.message}`;
        //     } else {
        //       // server-side error
        //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        //     }
        //     window.alert(errorMessage);
        //     return throwError(errorMessage);
        //   })
        // );
        
      }
    }

