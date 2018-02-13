/*** ANGULAR IMPORTS ***/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*** APP IMPORTS ***/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
