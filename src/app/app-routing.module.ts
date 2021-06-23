import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
