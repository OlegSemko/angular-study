import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ids: number[] = [1,2,3,4,5];
  constructor(private router: Router, private route: ActivatedRoute) {}
  name = 'angularbase';
  // onClick(elem) {
  //   console.log("from app")
  //   this.router.navigate([], {
  //     relativeTo: this.route, queryParams:{
  //       [this.name]: this.ids.join(',') || null
  //     },
  //     queryParamsHandling: 'merge'
  //   })
  // }

  onClicked(number: any) {
    console.log("app", number);
      this.router.navigate([], {
      relativeTo: this.route, queryParams:{
        [this.name]: number
        // this.ids.join(',') || null
      },
      queryParamsHandling: 'merge'
    })
    console.log(this.route.snapshot.queryParamMap.get("angularbase"));

  }


  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap.get("angularbase"));
  }
}
