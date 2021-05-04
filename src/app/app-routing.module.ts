import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './heroes/lista/lista.component';
import { DetalleComponent} from './heroes/detalle/detalle.component';
import { HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'heroes', component: ListaComponent },
  { path: 'heroe', component: DetalleComponent },
  { path: '**', component: ErrorComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

