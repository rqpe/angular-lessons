import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero';
//import { HEROES } from '../data/mock-heroes';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /* getHeroes(): Hero[] {
    return HEROES;
  } */

  getHeroes(): Observable<Hero[]> {
    /* const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes; */

    return this.http.get<Hero[]>(this.heroesUrl)
  }
  
  getHeroById(idHero: number): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/hero/' + idHero)
  }
}
