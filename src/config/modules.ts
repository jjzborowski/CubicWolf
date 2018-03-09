/*** ANGULAR IMPORTS ***/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
/*** APP IMPORTS ***/
import { LoadingModule } from 'ngx-loading';
import { RoutingModule } from 'modules/routing.module';

export const MODULES: any[] = [
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  LoadingModule,
  ReactiveFormsModule,
  RoutingModule,
];
