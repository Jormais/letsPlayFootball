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
    return this.httpClient.get<Jugadores[]>('http://localhost:3000/players');
  }

  sendPostRequest(jugador : Jugadores) : Observable<Jugadores> {
    return this.httpClient.post<Jugadores>('http://localhost:3000/players', jugador);
  }

  sendPutRequest(jugador :Jugadores, id :string) : Observable<Jugadores> {
    return this.httpClient.put<Jugadores>(`http://localhost:3000/players/${id}`, jugador)
  }

  sendDeleteRequest(id : string) : Observable<Jugadores> {
    return this.httpClient.delete<Jugadores>(`http://localhost:3000/players/${id}`)
  }

}
