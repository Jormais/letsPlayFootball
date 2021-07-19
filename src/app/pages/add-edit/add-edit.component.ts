import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadorService } from 'src/app/services/jugador/jugador.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
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
    
  }

  

  ngOnInit(): void {
  }

  guardar(jugador : Jugadores) {
    let isTrue : boolean;
    if (this.id === null) {
      console.log("Se ha llegado por el navbar");
      this.juadorService.sendPostRequest(jugador).subscribe(data => {
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
      });
    } else {
      console.log("se ha llegado por el jugador");
      this.juadorService.sendPutRequest(jugador, this.id).subscribe(data => {
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

}