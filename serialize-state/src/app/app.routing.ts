import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
