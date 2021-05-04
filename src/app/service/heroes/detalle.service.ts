import { Injectable } from '@angular/core';
import Heroe from '../../heroes/heroe';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  heroe? : Heroe;

  constructor() { }

  seleccionar(heroe : Heroe){
    this.heroe = heroe;
  }
}
