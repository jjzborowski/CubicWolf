/*** ANGULAR IMPORTS ***/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*** APP IMPORTS ***/
import { NavigationRoute } from 'config/interfaces';
import { NavigationService } from 'services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  navigation: NavigationRoute[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.getNavigation();
  }

  getNavigation(): void {
    this.navigationService.getNavigation()
      .subscribe(navigation => this.navigation = navigation);
  }
}
