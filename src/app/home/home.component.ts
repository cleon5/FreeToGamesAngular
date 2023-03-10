import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private readonly router: Router, private RestService: RestService){}

  title = 'FreeToGamesAngular';
  WindowsGames = [540,521,517,516,508,9,12,2,529,528,466];
  ExploracionGames=[521,517,427,475,445,11,380,458,455,522];
  FpsGames = [540,516,508,538,380,515,5,9,12,2,466];
  Games!:any;
  GamesRecent!:Array<any>;

  ngOnInit(){
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.get("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date").subscribe(resp => {
      this.Games=resp;
      this.GamesRecent = this.Games.splice(0,3)
    })

  }
  goto(){
    this.router.navigate(["game", '44'])
  }
}
