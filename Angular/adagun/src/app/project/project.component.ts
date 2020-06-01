import { Component, OnInit } from '@angular/core';
import {ProjectDataService} from "../service/data/project-data.service";
import {Project} from "../list-projects/list-projects.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id: number
  project: Project

  constructor(
    private projectService: ProjectDataService,
    private rout: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params["id"]
    this.project = new Project(this.id, "", "", "")

    if (this.id != -1) {
      this.projectService.retrieveProject("adagun", this.id).subscribe(
        data => this.project = data)
    }

  }

  saveProject() {

    if (this.id == -1)
    {
      this.projectService.createProject("adagun", this.project).subscribe(
        data => {
          this.router.navigate(['projects'])
        })
    }
    else {
      this.projectService.updateProject("adagun", this.id, this.project).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['projects'])
        }
      )
    }
  }
}


