import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private date:Date;

  constructor() {
    this.date = new Date;
    console.log(this.date);
   }

  ngOnInit() {
    
  }

}
