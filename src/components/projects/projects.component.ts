/*** ANGULAR IMPORTS ***/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
/*** APP IMPORTS ***/
import { Project } from 'config/interfaces';
import { ProjectsService } from 'services/projects.service';
import { SettingsService } from 'services/settings.service';

@Component({
  selector: 'app-projects.projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  message: string;
  loading: boolean;

  constructor(
    private projectsService: ProjectsService,
    private settings: SettingsService
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.loading = true;
    this.projectsService.getProjects()
      .subscribe(
        data => {
          this.projects = data['objects'];
          this.loading = false;
        },
        error => {
          this.message = this.projectsService.errorHandler(error);
          this.loading = false;
        }
      );
  }
}
