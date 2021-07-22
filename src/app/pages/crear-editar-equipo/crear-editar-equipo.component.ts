import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipos } from 'src/app/interfaces/equipos';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-crear-editar-equipo',
  templateUrl: './crear-editar-equipo.component.html',
  styleUrls: ['./crear-editar-equipo.component.css']
})
export class CrearEditarEquipoComponent implements OnInit {

  creandoEquipo : boolean = false;
  id :string = "";
  equipo :Equipos = {
    'Nombre del equipo': "",
    id : "",
    'Logo del Equipo' : "",
    Liga : ""
}

  constructor(private route : ActivatedRoute,private teamsService : TeamsService, private router : Router) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    if (this.id === null) {
      this.creandoEquipo = true;
    } else {
      this.creandoEquipo = false;
      this.teamsService.sendGetRequestByID(this.id).subscribe(equipo => {
        this.equipo = equipo[0];
      });
    }
  }

  ngOnInit(): void {
  }

  guardar(equipo : Equipos){
  
    let existenDatos : boolean;
    if (this.id === null) {
      console.log("Se ha llegado por el navbar");
      this.teamsService.sendPostRequest(equipo).subscribe(data => {
        console.log(data);
        if (data['Nombre del equipo'] != "") {
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
      console.log("se ha llegado por el euipo");
      this.teamsService.sendPutRequest(equipo, this.id).subscribe(data => {
        console.log(data);
        if (data['Nombre del equipo'] != "") {
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
