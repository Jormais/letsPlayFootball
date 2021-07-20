import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugadores } from '../../interfaces/jugadores';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  apiUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  sendGetRequestByID(id : string) : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(this.apiUrl  + `?id=${id}`);
  }
  
  sendGetRequest() : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(this.apiUrl  + 'players');
  }

  sendPostRequest(jugador : Jugadores) : Observable<Jugadores> {
    return this.httpClient.post<Jugadores>(this.apiUrl  + 'players', jugador);
  }

  sendPutRequest(jugador :Jugadores, id :string) : Observable<Jugadores> {
    return this.httpClient.put<Jugadores>(this.apiUrl  + `${id}`, jugador)
  }

  sendDeleteRequest(id : string) : Observable<Jugadores> {
    return this.httpClient.delete<Jugadores>(this.apiUrl + `${id}`)
  }
}