import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationRoute } from 'config/interfaces';
import { NavigationService } from 'services/navigation/navigation.service';

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
