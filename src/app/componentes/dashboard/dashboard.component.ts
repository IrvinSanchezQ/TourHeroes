import { Component, OnInit } from '@angular/core';
import {HeroesService} from 'src/app/servicios/heroes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 heroes=[];
 constructor(private servicios:HeroesService) {
  console.log(this.servicios.getheroes());
  this.heroes= this.servicios.getheroes();
 }

  ngOnInit(): void {
  }

}

//div *ngFor="let heroe of heroes | slice: 0:4; let i = index"