import { RouterModule, Routes } from '@angular/router';
import {StateSerializerComponent} from './components/stateSerializer/state.serializer.component';


const routes: Routes = [
  { path: '', component: StateSerializerComponent }
];

export const routing = RouterModule.forRoot(routes);
