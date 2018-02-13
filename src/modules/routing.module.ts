/*** ANGULAR IMPORTS ***/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/*** APP IMPORTS ***/
import { ROUTES } from 'config/routes';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
