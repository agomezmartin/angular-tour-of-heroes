import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/interface/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    /*************
  * PROPERTIES *
  *************/
  heroes: Hero[] = [];

  /**************
  * CONSTRUCTOR *
  **************/
  constructor(
    private heroService: HeroService
    ) { }

    /***********************
  * FUNCTIONS (methods)  *
  ***********************/
    // It returns the sliced list of heroes at positions 1 and 5, returning only Heroes two, three, four, and five
    getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

  /****************************
  * SYNCHRONICITY: Observable *
  ****************************/
  ngOnInit(): void {
    this.getHeroes();
  }

}