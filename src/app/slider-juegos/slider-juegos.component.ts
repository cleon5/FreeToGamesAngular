import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-slider-juegos',
  templateUrl: './slider-juegos.component.html',
  styleUrls: ['./slider-juegos.component.css']
})
export class SliderJuegosComponent implements OnInit {
  ArrayGames = [523, 516, 508, 11, 380,  12, 511, 522, 455];
  Games!:any;
  constructor(private readonly router: Router, private RestService: RestService){}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(){
    this.Games = []
    this.ArrayGames.forEach(element => {
      this.RestService.get("https://www.freetogame.com/api/game?id="+element).subscribe(resp => {
        this.Games.push(resp);
        console.log(this.Games)
      })
    });
   
  }
  refres(){
    
  }
  gotoGame(id:string){
    this.router.navigate(["game", id])
    setTimeout(() => { location.reload();  }, 50); 
  }


}
