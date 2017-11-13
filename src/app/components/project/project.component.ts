import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  projects: any[];
  project_id: number;
  project: [];
  message: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.projects = [
      {'id': '1', 'title': 'test title 1', 'date': '20.11.2017'},
      {'id': '2', 'title': 'test title 2', 'date': '20.11.2017'},
      {'id': '3', 'title': 'test title 3', 'date': '20.11.2017'},
      {'id': '4', 'title': 'test title 4', 'date': '20.11.2017'}
    ];
  }

  ngOnInit() {
    this.getParam();
    this.getProject();
  }

  getParam() {
    this.activatedRoute.params.subscribe(params => {
      this.project_id = params.id;
    });
  }

  getProject() {
      this.project = this.projects.find((obj) => {
        return obj.id === this.project_id;
      });

      if(!this.project){
        this.message = `There is no project with id ${this.project_id}`;
      }
  }

}
