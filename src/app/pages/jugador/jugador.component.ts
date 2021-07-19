import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadorService } from 'src/app/services/jugador/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  id : string = "";
  jugador : Jugadores[] = [];

  constructor(private route : ActivatedRoute, private jugadorService : JugadorService, private router : Router) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    jugadorService.sendGetRequestByID(this.id).subscribe( jugador => this.jugador = jugador);
  }

  ngOnInit(): void {
  }

  borrar() {
    let isTrue :boolean;
    this.jugadorService.sendDeleteRequest(this.id).subscribe( data => {
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
