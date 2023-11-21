import { Component, Input } from '@angular/core';
import { Hero } from '../../data/interface/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  /*************
  * PROPERTIES *
  *************/
 // Enables binding this property to a component template via its SELECTOR (<app-hero-detail [hero]="selectedHero"></app-hero-detail>)
  // @Input() hero?: Hero;

  hero: Hero | undefined;

  /**************
  * CONSTRUCTOR *
  **************/
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  /**********************
  * FUNCTIONS (methods) *
  **********************/
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  /**************
  * SYNCHRONICITY*
  **************/
  ngOnInit(): void {
    this.getHero();
  }

}
