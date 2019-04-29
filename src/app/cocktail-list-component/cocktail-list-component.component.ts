import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';
import { Cocktails } from '../cocktails';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktail: Cocktails[]=[]
  private myService: CocktailService;
  

  constructor(public param_service: CocktailService) {
    this.myService = param_service;
    

  }

  ngOnInit() {
    this.myService.getCocktails().subscribe(
      (param_data: Cocktails[]) => {
        this.cocktail = param_data;
        console.log(this.cocktail)
      }
    )



  }


}

