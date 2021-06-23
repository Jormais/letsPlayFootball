import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador : Jugadores[] = [];

  constructor(private route : ActivatedRoute, private jugadorService : JugadorService) {
    const id = this.route.snapshot.paramMap.get('id') as string;
    jugadorService.sendGetRequestByID(id).subscribe( jugador => this.jugador = jugador);
  }

  ngOnInit(): void {
  }

}
