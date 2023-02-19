import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css'],
})
export class ListGamesComponent {
  Games!: any;
  plataforma: string = 'all';
  genero: string = '';
  orden: string = 'popularity';
  urlFilter: string = '';
  filtrar: boolean = false;

  verSeleccion: string = '';
  constructor(
    private readonly router: Router,
    private RestService: RestService
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  public cargarDatos() {
    this.RestService.get(
      'https://free-to-play-games-database.p.rapidapi.com/api/games'
    ).subscribe((resp) => {
      this.Games = resp;
      console.log(resp);
    });
  }
  gotoGame(id: string) {
    this.router.navigate(['game', id]);
  }
  buscarFilter() {
    this.RestService.get(
      this.urlFilter
    ).subscribe((resp) => {
      this.Games = resp;
      console.log(resp);
    });
  }
  capturar() {
    console.log(this.genero)
    this.urlFilter = "";
    this.genero === ''
      ? (this.urlFilter =
          'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' +
          this.plataforma +
          '&sort-by=' +
          this.orden)
      : (this.urlFilter =
          'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' +
          this.plataforma +
          '&category='+this.genero+'&sort-by=' +
          this.orden);
    this.buscarFilter();
  }
  
}
