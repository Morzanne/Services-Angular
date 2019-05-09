import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private myService:HttpClient) { }

  public getImageOfTheDay():Observable<string>{
    const adresse:string="https://api.nasa.gov/planetary/apod?api_key=nypUj7DM5GbI0Rya4gxZH7dGl7BU5wH1jlLylgXN";
    const obs:Observable<any>=this.myService.get(adresse);
    const treatment =(param_data:any)=>{
      return param_data.url
    };
    return obs.pipe(map(treatment));
    
  }
}
