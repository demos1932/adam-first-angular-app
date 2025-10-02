import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, viewChild, viewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BottomComponent } from "./bottom/bottom.component";
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  standalone: true,
  styleUrls: ['./layouts.component.less'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [HeaderComponent, FooterComponent, NzDropDownModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, BottomComponent]
})
export class LayoutsComponent implements OnInit, AfterViewInit {

  appHeader = viewChild(HeaderComponent);

  constructor() {
    console.log("appHeader in constructor: ", this.appHeader);
  }

  ngOnInit() {
    console.log("appHeader in ngOnInit: ", this.appHeader);
  }

  ngAfterViewInit() {
    console.log("appHeader in ngAfterViewInit: ", this.appHeader);
    // 在这里可以调用子组件里面的方法：
    console.log("调用子组件的方法：", this.appHeader()?.menuList);
  }

}
