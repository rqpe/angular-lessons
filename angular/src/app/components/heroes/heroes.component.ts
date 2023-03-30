import { Component } from '@angular/core';

import { Hero } from '../../interfaces/hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */

  heroes: Hero[] = [];

  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
