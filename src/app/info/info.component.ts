import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private Http: HttpClient) { }

  public age: any;
  public competencedata: any[];

  ngOnInit() {
    this.dating();
    this.fetch();
  }


  dating() {
    let currentyear = new Date();
    let currentAge = currentyear.getFullYear() - 1997 ;
    this.age = currentAge;
  }

  fetch(){
    this.Http.get<any>("../../assets/file.json")
    .subscribe(
      resp => {
        console.log(resp);
        this.competencedata = resp;
        setTimeout(() => {
          this.styling();
        }, 2000);
      },
      err => console.log(err)
    )
  }

  styling(){
    this.competencedata.forEach(onecompt => {
      let theid = document.getElementById(onecompt.titre)
      theid.style.width = onecompt.niveau + "%";
    });
  }

}
