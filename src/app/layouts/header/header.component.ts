import { ThemeService } from './../../services/Theme.service';
import { Component, inject, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Menu } from '../menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { Route, Router, RouterModule } from '@angular/router';

type Stu = {
  name: string;
  age: number;
};

interface TmpMenu {
  name: string;
  path: string;
  list?: Array<TmpMenu>;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  imports: [NzAvatarModule, NzDropDownModule, NzIconModule, RouterModule],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {

  }
  themeService: ThemeService = inject(ThemeService);

  ngOnInit() {}

  tmpMenuList: Array<TmpMenu> = [
    {
      name: '首页',
      path: '',
    },
    {
      name: '全部课程',
      path: '/course',
      list: [
        {
          name: 'Java 课程',
          path: '/course/java/1',
        },
        {
          name: 'PHP 课程',
          path: '/php',
        },
        {
          name: 'Go 课程',
          path: '/go',
        },
      ],
    },
    {
      name: '其他',
      path: '/other',
      list: [],
    },
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

    localStorage.setItem('theme', theme);
    this.themeService.changeTheme();
  }

  navigateTo(path: string): void {
    // 路由传参方式2
    console.log('Navigating to:', path);
    this.router.navigate([path], { queryParams: { name: 'adam', age: 99 } });
    //this.router.navigateByUrl(path);
  }
}
