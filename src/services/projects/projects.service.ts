import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Project} from 'config/interfaces';

@Injectable()
export class ProjectsService {
  mockProjectsArray: Project[] = [
    {'id': '1', 'title': 'test title 1', 'date': '20.11.2017'},
    {'id': '2', 'title': 'test title 2', 'date': '20.11.2017'},
    {'id': '3', 'title': 'test title 3', 'date': '20.11.2017'},
    {'id': '4', 'title': 'test title 4', 'date': '20.11.2017'}
  ];

  constructor() {}

  /**
   * @todo Implement query to backend for data when API will be available
   * @returns {Observable<Project[]>}
   */
  getProjects(): Observable<Project[]> {
    return of(this.mockProjectsArray);
  }

  getProject(id): Observable<Project> {
    return of(this.mockProjectsArray.find(obj => {
      return obj.id === id;
    }));
  }
}
