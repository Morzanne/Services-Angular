import { Injectable } from '@angular/core';
import { Cocktails } from './cocktails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CocktailService {



  constructor(private myService:HttpClient) { 

  }

  public getCocktails():Observable<Cocktails[]>{
    const url:string="../assets/cocktails.json";
    const obs:Observable<any>=this.myService.get(url);
    const treatment=(param_data:any)=>{
    let treat=null;
    let tab:Cocktails[]=[];
    
      for (let i =0; i<param_data.length;i++){
        treat = param_data[i];
        tab.push(treat);
        console.log(tab)
      }
      return tab;
      console.log(tab)
      



    };
    return obs.pipe( map(treatment));
    





  }




}
