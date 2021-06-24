import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugadores } from 'src/app/interfaces/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(public httpClient: HttpClient) { }

  sendGetRequest() : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>('https://footbal-api.herokuapp.com/players');
  }

  sendPostRequest(jugador : Jugadores) : Observable<Jugadores> {
    return this.httpClient.post<Jugadores>('https://footbal-api.herokuapp.com/players', jugador);
  }

  sendPutRequest(jugador :Jugadores, id :string) : Observable<Jugadores> {
    return this.httpClient.put<Jugadores>(`https://footbal-api.herokuapp.com/players/${id}`, jugador)
  }

  sendDeleteRequest(id : string) : Observable<Jugadores> {
    return this.httpClient.delete<Jugadores>(`https://footbal-api.herokuapp.com/players/${id}`)
  }

}
