import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './Components/equipos/equipos.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { LigasComponent } from './Components/ligas/ligas.component';

const routes: Routes = [
  {
    path : "ligas",
    component : LigasComponent
  },
  {
    path : "equipos",
    component : EquiposComponent
  },
  {
    path : "jugadores",
    component : JugadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
