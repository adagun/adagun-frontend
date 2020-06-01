import { Component, OnInit } from '@angular/core';
import {ProjectDataService} from "../service/data/project-data.service";
import {Router} from "@angular/router";
import {AUTHENTICATED_USER, AuthService} from "../service/auth.service";

export class Project {
  constructor (public id: number,
               public name: string,
               public description: string,
               public url: string,)
  {  }
}

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(
    private projectService:ProjectDataService,
    private router:Router
  ) {}

  projects: Project[]
  message: string
  isLoggedIn: boolean

  ngOnInit(): void {
   this.refreshProjects()
  }

  private refreshProjects() {

     this.isLoggedIn = this.checkLogin()
     this.projectService.retrieveAllProjects("adagun").subscribe(
     response => {
       this.projects = response
     }
     )
  }

     checkLogin() {
      let user = sessionStorage.getItem(AUTHENTICATED_USER)
      return user !== null;
  }



  deleteProject(id) {

    this.projectService.deleteProject("adagun", id).subscribe(
      response => {
        this.message = `${id} deleted`
        this.refreshProjects()
      }
    )


  }

  updateProject(id: number) {

      this.router.navigate(['projects', id])
  }

  addProject() {
     this.router.navigate(['projects', -1])

  }
}


