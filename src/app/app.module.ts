import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {COMPONENTS, ROUTES} from 'config/components';
import {SERVICES} from 'config/services';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
