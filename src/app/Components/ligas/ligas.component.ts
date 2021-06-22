import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  leagues : Leagues[] = [];

  constructor(public httpClient: HttpClient) {
    this.sendGetRequest()
  }

  ngOnInit(): void {
  }

  sendGetRequest() {
    this.httpClient.get<Leagues[]>('http://localhost:3000/leagues').subscribe((res) => {
        console.log(res);
        this.leagues = res;
    });
  }

}

interface Leagues {
  'Nombre De La Liga' : string,
  Identificador: string,
  'Logo de la Liga' :string
}
