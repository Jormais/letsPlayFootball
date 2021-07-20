import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigasComponent } from './pages/ligas/ligas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BusquedaEquiposComponent } from './pages/busqueda-equipos/busqueda-equipos.component';
import { AddEditjugadorComponent } from './pages/add-edit-jugadores/add-edit-jugador.component';
import { CrearEditarEquipoComponent } from './pages/crear-editar-equipo/crear-editar-equipo.component';

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
    AddEditjugadorComponent,
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
