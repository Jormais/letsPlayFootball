import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { PlayerService } from 'src/app/services/player/player.service';

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

  constructor(private teamsService : TeamsService, private playerService : PlayerService) { 
    this.busqueda = localStorage.getItem("busqueda") || "";
    teamsService.getTeam().subscribe( equipo => {
      this.equipos = equipo;
      this.equipos.map( x => {
        if (x['Nombre del equipo'] === this.busqueda) {
          this.equiporFiltrados = x;
        }
      });
    });
    playerService.getPlayer().subscribe( jugador => {
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
