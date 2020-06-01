import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string = ''
  welcomeMessageFromService: string

  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService
              ) { }

  ngOnInit(): void {
    this.name =this.route.snapshot.params["name"]
  }



}
