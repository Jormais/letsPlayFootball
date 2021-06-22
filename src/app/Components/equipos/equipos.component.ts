import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos : Equipos[] = [];

  constructor(private equiposService : EquiposService) {
  equiposService.sendGetRequest().subscribe( equipo => {
      return this.equipos = equipo;
    });
  }

  ngOnInit(): void {
  }

}
