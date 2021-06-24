import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos/equipos.service';

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

  constructor(private equiposService : EquiposService) { }

  ngOnInit(): void {
  }

  guardar(equipo : Equipos){
    this.equiposService.sendPostRequest(equipo).subscribe( datos => {
      console.log(datos);
      
    })
  }

}
