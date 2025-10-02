import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.less'],
  imports: [RouterOutlet]
})
export class AllCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
