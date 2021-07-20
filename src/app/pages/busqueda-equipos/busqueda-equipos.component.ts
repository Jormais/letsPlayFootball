import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { EquiposService } from 'src/app/services/equipos/equipos.service';
import { JugadorService } from 'src/app/services/jugador/jugador.service';

@Component({
  selector: 'app-busqueda-equipos',
  templateUrl: './busqueda-equipos.component.html',
  styleUrls: ['./busqueda-equipos.component.css']
})
export class BusquedaEquiposComponent implements OnInit {
  busqueda: string;
  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];
  equipos : Equipos[] = [];
  equiporFiltrados!: Equipos;

  constructor(private equiposService : EquiposService, private jugadorService : JugadorService) { 
    this.busqueda = localStorage.getItem("busqueda") || "";
    equiposService.sendGetRequest().subscribe( equipo => {
      this.equipos = equipo;
      this.equipos.map( x => {
        if (x['Nombre del equipo'] === this.busqueda) {
          this.equiporFiltrados = x;
        }
      });
    });
    jugadorService.sendGetRequest().subscribe( jugador => {
      this.jugadores = jugador;
      this.jugadores.map( x => {
        if(x.teamId === this.equiporFiltrados.id) {
          this.jugadoresFiltrados.push(x)
        }
      })
    });
  }

  ngOnInit(): void {
  }

}
