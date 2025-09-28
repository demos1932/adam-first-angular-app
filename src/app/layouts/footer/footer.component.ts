import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, signal, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  imports: [NgTemplateOutlet],
})
export class FooterComponent implements OnInit,  AfterViewInit, OnDestroy {

  protected readonly date = new Date();

  readonly Footer = {
    "team": "Angular Team",
    "framework": "Ant Design Framework"
  }
  // 定义 footerVersion，它会在模板中显示
  footerVersion = '1.0.0'; // 示例版本号，请根据你的实际需求修改

  // 使用 @ViewChild 通过模板变量名 'footerRef' 来获取 TemplateRef
  // 明确指定 read 为 TemplateRef 可以确保获取到正确的类型（虽然不是必须，但有助于类型安全）
  @ViewChild('footerRef', { read: TemplateRef })
  footerTemplateRef!: TemplateRef<any>;

  // 如果你的组件需要动态渲染此模板，通常需要注入 ViewContainerRef
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    // 现在你可以使用 this.footerTemplateRef 了
    console.log('获取到的 TemplateRef:', this.footerTemplateRef);

    // 清除容器内的现有视图（可选）
    this.viewContainerRef.clear();
    // 创建并插入嵌入视图
    // this.viewContainerRef.createEmbeddedView(this.footerTemplateRef);
    // 如果需要，你也可以传递上下文对象
    const viewRef = this.viewContainerRef.createEmbeddedView(this.footerTemplateRef, { footerVersion: '2.0.0' });

  }

  count = signal(0);

  ngOnDestroy(): void {
  }

  ngOnInit() {
    console.log('1-------------', this.count())
    this.count.set(3)
    console.log('2-------------', this.count())
    this.count.update(value => value + 4)
    console.log('3-------------', this.count())
  }
}
