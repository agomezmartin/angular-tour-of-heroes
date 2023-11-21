import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

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
  @Input() hero?: Hero;

}
