import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '.header-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
