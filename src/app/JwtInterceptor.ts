import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemoServiceService } from './demo-service.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private service:DemoServiceService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const token = localStorage.getItem('jwtToken'); // Assuming you store the token in localStorage
  //  const token=this.service.token
    console.log("hi")
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
