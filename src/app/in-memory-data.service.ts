import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import Heroe from './heroes/heroe';
import Heroes from './heroes/datos';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = Heroes;
    return { heroes };
  }
  genId(heroes: Heroe[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(heroe => heroe.id)) + 1 : 1;
  }

}