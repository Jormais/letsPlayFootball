import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { BusquedaEquiposComponent } from './Components/busqueda-equipos/busqueda-equipos.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { EquiposComponent } from './Components/equipos/equipos.component';
import { JugadorComponent } from './Components/jugador/jugador.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { LigasComponent } from './Components/ligas/ligas.component';

const routes: Routes = [
  {
    path : "",
    component : LigasComponent
  },
  {
    path : "equipos",
    component : EquiposComponent
  },
  {
    path : "equipos/jugadores",
    component : JugadoresComponent
  },
  {
    path : "jugador/:id",
    component : JugadorComponent
  },
  {
    path : "busqueda",
    component : BusquedaComponent
  },
  {
    path : "busqueda-equipos",
    component : BusquedaEquiposComponent
  },
  {
    path : "editar-crear/:id",
    component : AddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
