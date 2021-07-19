import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { BusquedaEquiposComponent } from './pages/busqueda-equipos/busqueda-equipos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { CrearEditarEquipoComponent } from './pages/crear-editar-equipo/crear-editar-equipo.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { LigasComponent } from './pages/ligas/ligas.component';

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
  },
  {
    path : "editar-crear",
    component : AddEditComponent
  },
  {
    path : "crear-editar-equipo",
    component : CrearEditarEquipoComponent
  },
  {
    path : "crear-editar-equipo/:id",
    component : CrearEditarEquipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
