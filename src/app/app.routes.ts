import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '**',
    component: NotFoundComponent
  }
];
