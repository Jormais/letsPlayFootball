import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];

  constructor(private playerService : PlayerService, private teamsService : TeamsService) {
    playerService.getPlayer().subscribe( jugador => {
        this.jugadores = jugador;
        this.jugadores.map( x => {
          if(x.teamId === this.teamsService.idEquipo) {
            this.jugadoresFiltrados.push(x)
          }
        })
      });
  }

  ngOnInit(): void {
  }

}
