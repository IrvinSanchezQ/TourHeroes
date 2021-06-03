import { Component, OnInit } from '@angular/core';
import {HeroesService} from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  heroes = [];

  constructor(private servicios:HeroesService) {
    console.log(this.servicios.getheroes());
    this.heroes= this.servicios.getheroes();
   }


}
