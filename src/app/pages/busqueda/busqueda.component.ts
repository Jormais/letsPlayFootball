import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { BusquedaService } from 'src/app/services/busqueda/busqueda.service';
import { JugadorService } from 'src/app/services/jugador/jugador.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  busqueda : string = "";
  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];

  constructor(private busquedaService : BusquedaService, private jugadorService : JugadorService) { 
    this.busqueda = busquedaService.search;
    jugadorService.sendGetRequest().subscribe( jugador => {
      this.jugadores = jugador;
      this.jugadoresFiltrados = this.jugadores.filter( j => j['Nombre del Jugador'].toLowerCase().indexOf(this.busqueda.toLowerCase()) !== -1)
    });
  }

  ngOnInit(): void { }

}
