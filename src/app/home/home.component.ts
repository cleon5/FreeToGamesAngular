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

  ngOnInit(){
    this.cargarDatos();
  }

  public cargarDatos(){
    this.RestService.get("https://www.freetogame.com/api/games").subscribe(resp => {
      console.log(resp)
    })
  }
  goto(){
    this.router.navigate(["game", '44'])
  }
}
