import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFoundComponent } from './not-found/not-found.component';
import { JavaComponent } from './home/java/java.component';
import { AllCoursesComponent } from './home/all-courses/all-courses.component';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'course',
    component: AllCoursesComponent,
    // 路由嵌套，注意这里的 path，永远不要以 / 开头
    children: [
      {
        path: 'java/:id',
        component: JavaComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
