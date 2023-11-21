import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent {

  /*************
  * PROPERTIES *
  *************/
  heroes: Hero[] = [];
  selectedHero?: Hero;

  /**************
  * CONSTRUCTOR *
  **************/
  constructor(
    private heroService: HeroService
    ) {}

  /***********************
  * FUNCTIONS (methods)  *
  ***********************/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  /****************************
  * SYNCHRONICITY: Observable *
  ****************************/
  ngOnInit(): void {
  this.getHeroes();
}

}