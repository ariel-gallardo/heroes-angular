import { Component, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/service/heroes/detalle.service';
import ListaService from '../../service/heroes/lista.service';
import Heroe from '../heroe';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private listaService : ListaService, private detalleService : DetalleService) { }

  heroes? : Heroe[]

  seleccionar(heroe : Heroe){
    this.detalleService.seleccionar(heroe);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.listaService.getAll().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
