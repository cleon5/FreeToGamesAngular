import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderJuegosComponent } from './slider-juegos/slider-juegos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ListGamesComponent,
    NavbarComponent,
    SliderJuegosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
