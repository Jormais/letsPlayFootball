import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipos } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos/equipos.service';
import { LeaguesService } from 'src/app/services/leagues/leagues.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos : Equipos[] = [];
  equiporFiltrados : Equipos[] = [];

  constructor(private leaguesService : LeaguesService ,private equiposService : EquiposService, private route : ActivatedRoute) {
    equiposService.sendGetRequest().subscribe( equipo => {
        this.equipos = equipo;
        this.equipos.map( x => {
          if(x.Liga === this.leaguesService.idLeague) {
            this.equiporFiltrados.push(x)
          }
        });
      });
  }

  ngOnInit(): void {
  }

}
