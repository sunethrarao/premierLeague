import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PremierLeague';

  // showHead: boolean = false;



  constructor(private router: Router) {
    // // on route change to '/login', set the variable showHead to false
    //   this.router.events.forEach((event) => {
    //     if (event instanceof NavigationStart) {
    //       if (event['url'] == '/login') {
    //         this.showHead = false;
    //       } else {
            
    //         this.showHead = true;
    //       }
    //     }
    //   });
    }
  ngOnInit(){

  }
  // isLoginTosShowHead(){
  //   this.showHead = true;
  // }
}
