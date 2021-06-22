import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  leagues : {}[] = [{}];

  constructor() {
    this.getLeagues()
  }

  ngOnInit(): void {
  }

  getLeagues() {
    axios.get("http://localhost:3000/leagues")
    .then( league => {
      console.log(league.data);
      return  this.leagues = league.data;
    }
    )
    .catch( error => console.log(error)
    );
  }

}
