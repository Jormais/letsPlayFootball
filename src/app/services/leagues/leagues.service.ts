import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leagues } from 'src/app/interfaces/leagues';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  idLeague : string = "";

  constructor(public httpClient: HttpClient) { }

  sendGetRequest() : Observable<Leagues[]> {
    return this.httpClient.get<Leagues[]>('http://localhost:3000/leagues');
  }

}
