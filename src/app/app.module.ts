import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigasComponent } from './ligas/ligas.component';
import { EquiposComponent } from './Components/equipos/equipos.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    EquiposComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
