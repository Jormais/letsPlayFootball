import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  id : string = "";
  jugador : Jugadores[] = [];

  constructor(private route : ActivatedRoute, private playerService : PlayerService, private router : Router) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    playerService.getPlayerByID(this.id).subscribe( jugador => this.jugador = jugador);
  }

  ngOnInit(): void {
  }

  borrar() {
    let isTrue :boolean;
    this.playerService.deletePlayer(this.id).subscribe( data => {
      console.log(data);
      if (data['Nombre del Jugador'] != "") {
        isTrue = true;
      }
      if (isTrue) {
        this.router.navigateByUrl("").then(e => {
          if (e) {
            console.log("Navigation is successful!");
            isTrue = false;
          } else {
            console.log("Navigation has failed!");
            isTrue = false;
          }
        });
      }
    })
  }

}
