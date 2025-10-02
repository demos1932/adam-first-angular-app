import { AfterViewInit, Component, ElementRef, signal, viewChildren } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { CourseCategory, Course } from '../model/course';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import courseArray from '../mock/courses.json';

@Component({
  selector: 'app-home',
  imports: [NzCarouselModule, NzButtonModule, NzSegmentedModule, NzGridModule, NzCardModule, NzFlexModule],
  templateUrl: './home.html',
  styleUrl: './home.less'
})
export class Home implements AfterViewInit{

  cardList = viewChildren(NzCardComponent, { read: ElementRef });

  ngAfterViewInit(): void {
    console.log("调用子组件的方法2：", this.cardList());
    this.cardList().forEach((card) => {
      console.log("card: ", card);
      console.log("card nativeElement: ", card.nativeElement);
    });
  }

  imgList = [
    {
      src: "../../assets/carousel/1.png"
    },
    {
      src: "../../assets/carousel/2.png"
    },
    {
      src: "../../assets/carousel/3.png"
    }
  ]

  courseListButtons = Object.values(CourseCategory);
  courses: Course[] = courseArray as Course[];

  selectedCourseButton = CourseCategory.All;
  courseOptions = ['最新', '最热', '推荐'];
  courseOption = signal('最热');

  selectCourse(button: CourseCategory):void {
    this.selectedCourseButton = button;
    console.log(this.selectedCourseButton);
  }

  handleCourseOptionChange(e: string | number): void {
    console.log(e);
    this.courseOption.set(e as string);
    console.log(courseArray)
  }

}
