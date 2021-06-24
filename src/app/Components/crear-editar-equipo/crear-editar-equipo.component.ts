import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';

@Component({
  selector: 'app-crear-editar-equipo',
  templateUrl: './crear-editar-equipo.component.html',
  styleUrls: ['./crear-editar-equipo.component.css']
})
export class CrearEditarEquipoComponent implements OnInit {

  id :string = "";
  equipo :Equipos = {
    'Nombre del equipo': "",
    id : "",
    'Logo del Equipo' : "",
    Liga : ""
}

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){

  }

}
