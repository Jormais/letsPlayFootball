import { Component, OnInit, Input } from '@angular/core';
import { Leagues } from 'src/app/interfaces/leagues';
import { LeaguesService } from 'src/app/services/leagues/leagues.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  leagues : Leagues[] = [];

  constructor(private leaguesService : LeaguesService) {
    leaguesService.sendGetRequest().subscribe( league => {
      return this.leagues = league;
    });
  }

  ngOnInit(): void {
  }

  setIdLiga(id :string) {
    this.leaguesService.idLeague = id;
  }

}