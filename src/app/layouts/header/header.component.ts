import { ThemeService } from './../../services/Theme.service';
import { Component, inject, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Menu } from '../menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

type Stu = {
  name: string;
  age: number;
};

interface TmpMenu {
  name: string,
  list?: Array<TmpMenu>
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  imports: [NzAvatarModule, NzDropDownModule, NzIconModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  themeService: ThemeService = inject(ThemeService)

  ngOnInit() {}

  tmpMenuList: Array<TmpMenu> = [
    {
      "name": "首页",
    },
    {
      "name": "全部课程",
      "list": [
        {
          "name": "所有课程"
        },
        {
          "name": "Java 课程"
        },
        {
          "name": "PHP 课程"
        },
        {
          "name": "Go 课程"
        }
      ]
    },
    {
      "name": "其他",
      "list": []
    }
  ];

  menuList: Menu[] = [
    { id: 1, name: '首页', level: 1, order: 0 },
    { id: 2, name: '产品', level: 1, order: 2 },
    { id: 3, name: '产品A', level: 2, order: 0, parentId: 2 },
    { id: 4, name: '关于', level: 1, order: 1 },
    { id: 5, name: '产品B', level: 2, order: 1, parentId: 2 },
  ];

  get sortedTopMenus(): Menu[] {
    return this.menuList.filter((menu) => !menu.parentId).sort((a, b) => a.order - b.order);
  }

  hasChildren(parentId: number): boolean {
    return this.menuList.some((menu) => menu.parentId === parentId);
  }

  getChildren(parentId: number): Menu[] {
    return this.menuList
      .filter((menu) => menu.parentId === parentId)
      .sort((a, b) => a.order - b.order);
  }

  handleClick(menu: Menu): void {
    console.log('Selected menu:', menu);
  }

  changeTheme(theme: string): void {
    // this.themeService.toggleTheme();

    localStorage.setItem("theme", theme);
    this.themeService.changeTheme();
  }
}
