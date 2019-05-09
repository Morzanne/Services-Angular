import { Component, OnInit } from '@angular/core';
import { NasaService } from '../app/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cocktails';
  public imgOfTheDay:string=""

  constructor(public param_service: NasaService){
    this.imgOfTheDay=null;
  }
  ngOnInit(){
    this.param_service.getImageOfTheDay().subscribe(
      (param_data:string)=>{
        this.imgOfTheDay=param_data;
      }
    )
  }
}
