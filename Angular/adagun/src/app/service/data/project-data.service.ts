import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../list-projects/list-projects.component";
import { JPA_API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(
    private httpClient:HttpClient
  ) { }

    retrieveAllProjects(username)
  {
    return this.httpClient.get<Project[]>(`/jpa/users/${username}/projects`)
  }

    deleteProject(username, id) {

      return this.httpClient.delete(`/jpa/users/${username}/projects/${id}`)

  }

    retrieveProject(username, id) {
    return this.httpClient.get<Project>(`/jpa/users/${username}/projects/${id}`)

  }

    updateProject(username, id, project) {
    return this.httpClient.put(`/jpa/users/${username}/projects/${id}`, project)

  }
      createProject(username, project) {
    return this.httpClient.post(`/jpa/users/${username}/projects/`, project)

  }



}
