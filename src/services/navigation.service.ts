/*** ANGULAR IMPORTS ***/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
/*** APP IMPORTS ***/
import { NavigationRoute } from 'config/interfaces';

@Injectable()
export class NavigationService {
  mockNavArray: NavigationRoute[] = [
    {name: 'About', path: '/about'},
    {name: 'Projects', path: '/projects'},
    {name: 'Contact', path: '/contact'}
  ];

  constructor() {}

  /**
   * @todo Implement query to backend for data when API will be available
   * @returns {Observable<NavigationRoute[]>}
   */
  getNavigation(): Observable<NavigationRoute[]> {
    return of(this.mockNavArray);
  }
}
