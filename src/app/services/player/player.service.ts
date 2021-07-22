import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugadores } from '../../interfaces/jugadores';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  getPlayerByID(id : string) : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(this.apiUrl  + `players?id=${id}`);
  }
  
  getPlayer() : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(this.apiUrl  + 'players');
  }

  createPlayer(jugador : Jugadores) : Observable<Jugadores> {
    return this.httpClient.post<Jugadores>(this.apiUrl  + 'players', jugador);
  }

  editPlayer(jugador :Jugadores, id :string) : Observable<Jugadores> {
    return this.httpClient.put<Jugadores>(this.apiUrl  + `${id}`, jugador)
  }

  deletePlayer(id : string) : Observable<Jugadores> {
    return this.httpClient.delete<Jugadores>(this.apiUrl + `${id}`)
  }
}