/*** ANGULAR IMPORTS ***/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
/*** APP IMPORTS ***/

@Component({
  selector: 'app-route-back',
  templateUrl: './route-back.component.html',
  styleUrls: ['./route-back.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RouteBackComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit(): void { }
}
