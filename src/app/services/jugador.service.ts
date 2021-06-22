import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugadores } from '../interfaces/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(public httpClient: HttpClient) { }

  sendGetRequest(id : string) : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(`http://localhost:3000/players?id=${id}`);
  }
}