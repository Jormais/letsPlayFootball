import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { EquiposService } from 'src/app/services/equipos/equipos.service';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];

  constructor(private playerService : PlayerService, private equiposService : EquiposService) {
    playerService.getPlayer().subscribe( jugador => {
        this.jugadores = jugador;
        this.jugadores.map( x => {
          if(x.teamId === this.equiposService.idEquipo) {
            this.jugadoresFiltrados.push(x)
          }
        })
      });
  }

  ngOnInit(): void {
  }

}
