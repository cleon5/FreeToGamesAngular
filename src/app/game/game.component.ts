import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id!:string;
  Game !: any;
  constructor( private readonly route: ActivatedRoute, private RestService: RestService){}

  ngOnInit() :void{
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id'])
    })
    this.loadGame();
  }

  public loadGame(){
    this.RestService.get("https://www.freetogame.com/api/game?id="+this.id).subscribe(resp => {
      this.Game = resp;
      console.log(resp)
    })
  }
}
