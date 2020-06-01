import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  username: string = ""
  password: string = ""
  errorMessage: string = "Invalid username or password"
  invalidLogin: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

      JWTAuthLogin() {
     this.authService.executeJWTAuthenticationService(this.username, this.password).subscribe(
       data => {
         this.router.navigate(["welcome", this.username])
         this.invalidLogin = false
       },
       error => {
         console.log(error)
         this.invalidLogin = true
       }
     )
   }

}
