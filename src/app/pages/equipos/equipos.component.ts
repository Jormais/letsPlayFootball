import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipos } from 'src/app/interfaces/equipos';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { LeaguesService } from 'src/app/services/leagues/leagues.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos : Equipos[] = [];
  equiporFiltrados : Equipos[] = [];

  constructor(private leaguesService : LeaguesService ,private teamsService : TeamsService, private route : ActivatedRoute,  private router : Router) {
    teamsService.getTeam().subscribe( equipo => {
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

  setIdEquipo(id : string) {
    this.teamsService.idEquipo = id;
  }

  eliminar(id : string) {
    console.log(id);
    
    let isTrue :boolean;
    this.teamsService.deleteTeam(id).subscribe( data => {
      console.log(data);
      if (data['Nombre del equipo'] != "") {
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
