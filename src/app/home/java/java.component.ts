import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(router: ActivatedRoute) {
    // url参数 ?id=123&name=adam
    router.queryParams.subscribe(params => {
      console.log(params); //log the entire params object
    });
    // 动态路由的路径参数 /course/java/:id
    router.params.subscribe(params => {
      console.log(params); //log the entire params object
    });
  }

  ngOnInit() {
  }

}
