import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


     let authenticatedToken = this.authService.getAuthenticatedToken()
     let username = this.authService.getAuthenticationUser()

    if(authenticatedToken && username)
    {
       request = request.clone(
         {
           setHeaders: { Authorization: authenticatedToken }
         }
       )
 }
    return next.handle(request)
  }
}
