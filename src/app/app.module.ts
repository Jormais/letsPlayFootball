import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigasComponent } from './Components/ligas/ligas.component';
import { EquiposComponent } from './Components/equipos/equipos.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { JugadorComponent } from './Components/jugador/jugador.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { BusquedaEquiposComponent } from './Components/busqueda-equipos/busqueda-equipos.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { CrearEditarEquipoComponent } from './Components/crear-editar-equipo/crear-editar-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    EquiposComponent,
    JugadoresComponent,
    JugadorComponent,
    NavbarComponent,
    BusquedaComponent,
    BusquedaEquiposComponent,
    AddEditComponent,
    CrearEditarEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
