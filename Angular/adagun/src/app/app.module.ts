import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { MenuComponent } from './menu/menu.component';
import { LsComponent } from './ls/ls.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './project/project.component';
import {HttpInterceptorBasicAuthService} from "./service/http/http-interceptor-basic-auth.service";



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListProjectsComponent,
    MenuComponent,
    LsComponent,
    FooterComponent,
    LogoutComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
