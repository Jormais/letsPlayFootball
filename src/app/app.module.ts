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

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    EquiposComponent,
    JugadoresComponent,
    JugadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
