import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService implements HttpInterceptor {

  //1. implemetamos el httpinterceptor
  constructor() { }
  //2.
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler)
    : Observable<HttpEvent<any>> {
      console.log('entro aqui')
      //3. Variable que almacena el nuevo requerimiento
      const nuevoReq=req.clone(
        {
          setHeaders:{Authorization:'codigo 2023'}
        })
    return next.handle(nuevoReq);
  }
}
