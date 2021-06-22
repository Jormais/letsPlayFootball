import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadoresService } from 'src/app/services/jugadores/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores : Jugadores[] = [];

  constructor(private jugadoresService : JugadoresService) {
    jugadoresService.sendGetRequest().subscribe( jugador => {
        return this.jugadores = jugador;
      });
  }

  ngOnInit(): void {
  }

}
