import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { EquiposService } from 'src/app/services/equipos/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];

  constructor(private jugadoresService : JugadoresService, private equiposService : EquiposService) {
    jugadoresService.sendGetRequest().subscribe( jugador => {
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
