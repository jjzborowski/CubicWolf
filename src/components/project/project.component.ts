import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from 'services/projects/projects.service';
import {Project} from 'config/interfaces';

@Component({
  selector: 'app-project.project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  project_id: number;
  project: Project;
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

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
    this.projectsService.getProject(this.project_id)
      .subscribe(data => this.project = data);
  }
}
