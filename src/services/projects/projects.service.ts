import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_PROJECTS_URL} from 'config/settings';
import {Project} from 'config/interfaces';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(API_PROJECTS_URL);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(API_PROJECTS_URL + id + '/');
  }
}
