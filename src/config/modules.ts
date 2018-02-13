/*** ANGULAR IMPORTS ***/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
/*** APP IMPORTS ***/
import { RoutingModule } from 'modules/routing.module';
import { LoadingModule } from 'ngx-loading';

export const MODULES: any[] = [
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  LoadingModule,
  ReactiveFormsModule,
  RoutingModule
];
