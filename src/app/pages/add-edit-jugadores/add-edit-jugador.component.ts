import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadorService } from 'src/app/services/jugador/jugador.service';

@Component({
  selector: 'app-add-edit-jugador',
  templateUrl: './add-edit-jugador.component.html',
  styleUrls: ['./add-edit-jugador.component.css']
})
export class AddEditjugadorComponent implements OnInit {

  creandoJugador : boolean = false;
  id :string = "";
  jugador : Jugadores = {
    'Nombre del Jugador' : "",
    id : "",
    Avatar : "",
    teamId:""
  }

  constructor(private route : ActivatedRoute, private juadorService : JugadorService, private router : Router) { 
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    if (this.id === null) {
      this.creandoJugador = true;
    } else {
      this.creandoJugador = false;
      this.juadorService.sendGetRequestByID(this.id).subscribe(jugador => {
        this.jugador = jugador[0];
      });
    }
  }

  

  ngOnInit(): void {
  }

  guardar(jugador : Jugadores) {
    let existenDatos : boolean;
    if (this.id === null) {
      console.log("Se ha llegado por el navbar");
      this.juadorService.sendPostRequest(jugador).subscribe(data => {
        console.log(data);
        if (data['Nombre del Jugador'] != "") {
          existenDatos = true;
        }
        if (existenDatos) {
          this.router.navigateByUrl("").then(e => {
            if (e) {
              console.log("Navigation is successful!");
              existenDatos = false;
            } else {
              console.log("Navigation has failed!");
              existenDatos = false;
            }
          });
        }
      });
    } else {
      console.log("se ha llegado por el jugador");
      this.juadorService.sendPutRequest(jugador, this.id).subscribe(data => {
        console.log(data);
        if (data['Nombre del Jugador'] != "") {
          existenDatos = true;
        }
        if (existenDatos) {
          this.router.navigateByUrl("").then(e => {
            if (e) {
              console.log("Navigation is successful!");
              existenDatos = false;
            } else {
              console.log("Navigation has failed!");
              existenDatos = false;
            }
          });
        }
      })
    }
  }

}