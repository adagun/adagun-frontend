import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constants";

export const AUTHENTICATION_TOKEN = "authenticationToken"
export const AUTHENTICATED_USER = "authenticatedUser"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return (user !== null)
  }

  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(AUTHENTICATION_TOKEN)
  }



  getAuthenticationUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  getAuthenticatedToken()
  {
      let user = sessionStorage.getItem(AUTHENTICATED_USER)
      if (user !== null)
      {
        return sessionStorage.getItem(AUTHENTICATION_TOKEN)
      }
  }

  executeJWTAuthenticationService(username, password)
  {

     return this.httpClient.post<any>(`${API_URL}/authenticate`, {username, password})
       // return data to subscriber
       .pipe(map(data => {
         sessionStorage.setItem(AUTHENTICATED_USER, username)
         sessionStorage.setItem(AUTHENTICATION_TOKEN, `Bearer ${data.token}`)
         return data;
       } )
     )
  }

}

export class AuthenticationBean
{
  constructor(public  message: string) {
  }
}




