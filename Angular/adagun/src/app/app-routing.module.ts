import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {ListProjectsComponent} from "./list-projects/list-projects.component";
import {LogoutComponent} from "./logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";
import {ProjectComponent} from "./project/project.component";


const routes: Routes = [
  { path:"", component: ListProjectsComponent },

  { path:"welcome/:name", component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: "projects", component: ListProjectsComponent },
  { path: "projects/:id", component: ProjectComponent, canActivate: [RouteGuardService] },
  { path:"login", component: LoginComponent },
  { path:"logout", component: LogoutComponent, canActivate: [RouteGuardService] },


  { path:"**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
