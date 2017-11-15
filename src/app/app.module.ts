import {NgModule} from '@angular/core';
import {COMPONENTS} from 'config/components';
import {MODULES} from 'config/modules';
import {SERVICES} from 'config/services';

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: [SERVICES],
  bootstrap: [COMPONENTS.find(obj => {
    return obj.name === 'AppComponent';
  })]
})
export class AppModule { }
