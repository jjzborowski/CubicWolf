import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from 'services/projects/projects.service';
import {Project} from 'config/interfaces';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-projects.projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(
        data => this.projects = data['objects'],
        (error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.log('An error occurred:', error.error.message);
          } else {
            console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
        }
      );
  }
}
