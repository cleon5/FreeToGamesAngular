import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  name!:string;
  constructor( private readonly route: ActivatedRoute){}

  ngOnInit() :void{
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      console.log(params['id'])
    })

  }
}
