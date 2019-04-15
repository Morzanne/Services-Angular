import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktail=[];

  constructor(public param_service:CocktailService) {
    this.cocktail=this.param_service.getCocktails()
    console.log(this.cocktail)
   }
   
  ngOnInit() {}
  
  
}

