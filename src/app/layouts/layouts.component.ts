import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BottomComponent } from "./bottom/bottom.component";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  standalone: true,
  styleUrls: ['./layouts.component.less'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [HeaderComponent, FooterComponent, NzDropDownModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, BottomComponent]
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
