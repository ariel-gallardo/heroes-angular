import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import Heroes from '../../heroes/datos';
import Heroe from '../../heroes/heroe';

@Injectable({
  providedIn: 'root'
})
export default class ListaService {

  constructor() { }

  getAll(): Observable<Heroe[]> {
    return of (Heroes);
  }
}
