import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent {
  Games !: any;
  constructor(private readonly router: Router, private RestService: RestService){}

  ngOnInit(){
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.get("https://free-to-play-games-database.p.rapidapi.com/api/games").subscribe(resp => {
      this.Games = resp;
      console.log(resp)
    })
  }
  gotoGame(id:string){
    this.router.navigate(["game", id])
  }

}
