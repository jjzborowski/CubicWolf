/*** ANGULAR IMPORTS ***/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
/*** APP IMPORTS ***/
import { Project } from 'config/interfaces';
import { ProjectsService } from 'services/projects.service';

@Component({
  selector: 'app-projects.projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  message: string;

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(
        data => this.projects = data['objects'],
        error => this.message = this.projectsService.errorHandler(error)
      );
  }
}
