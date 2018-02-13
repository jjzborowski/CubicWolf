/*** ANGULAR IMPORTS ***/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from 'config/interfaces';
import { Observable } from 'rxjs/Observable';
/*** APP IMPORTS ***/
import { SettingsService } from 'services/settings.service';

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient, private settings: SettingsService) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.settings.API_PROJECTS_URL);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.settings.API_PROJECTS_URL + id + '/');
  }

  errorHandler(error: HttpErrorResponse): string {
    console.log(error);
    return error.statusText;
  }
}
