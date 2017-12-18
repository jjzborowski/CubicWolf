import {HomeComponent} from 'components/home/home.component';
import {AboutComponent} from 'components/about/about.component';
import {ContactComponent} from 'components/contact/contact.component';
import {ProjectsComponent} from 'components/projects/projects.component';
import {ProjectComponent} from 'components/project/project.component';

export const ROUTES: any[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectComponent}
];
