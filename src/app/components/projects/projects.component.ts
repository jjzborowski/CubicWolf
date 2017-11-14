import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '.projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  projects: any[];

  constructor() {

    this.projects = [
      {'id': '1', 'title': 'test title 1', 'date': '20.11.2017'},
      {'id': '2', 'title': 'test title 2', 'date': '20.11.2017'},
      {'id': '3', 'title': 'test title 3', 'date': '20.11.2017'},
      {'id': '4', 'title': 'test title 4', 'date': '20.11.2017'},
      {'id': '5', 'title': 'test title 5', 'date': '20.11.2017'},
      {'id': '6', 'title': 'test title 6', 'date': '20.11.2017'},
      {'id': '7', 'title': 'test title 7', 'date': '20.11.2017'}
    ];
  }

  ngOnInit() {}

}
