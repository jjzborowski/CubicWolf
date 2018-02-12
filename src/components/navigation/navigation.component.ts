import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'services/navigation/navigation.service';
import { NavigationRoute } from 'config/interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  navigation: NavigationRoute[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.getNavigation();
  }

  getNavigation(): void {
    this.navigationService.getNavigation()
      .subscribe(navigation => this.navigation = navigation);
  }
}