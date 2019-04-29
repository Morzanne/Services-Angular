import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailService } from './cocktail-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
