import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

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
    private heroService: HeroService,
    private messageService: MessageService
    ) {}

  /***********************
  * FUNCTIONS (methods)  *
  ***********************/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
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