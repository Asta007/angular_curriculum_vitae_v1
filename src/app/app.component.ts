import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rtt';

  outlet : String;

  constructor(private router : Router , loc : Location){
    router.events.subscribe(
      val => {
        if (val['url'] == location.pathname){
          this.outlet = val['url'];
          console.log(this.outlet);
          if((this.outlet != "/info") && (this.outlet != "/parcours") && (this.outlet != "/contacte") && (this.outlet != "/")){
            this.outlet = "/404"
          } 
        }
      }
    )

    
  }
}
