import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LayoutsComponent } from './layouts/layouts.component';

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, LayoutsComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('adam-first-angular-app');
}
