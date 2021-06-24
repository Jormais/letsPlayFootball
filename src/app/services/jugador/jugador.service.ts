import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugadores } from '../../interfaces/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(public httpClient: HttpClient) { }

  sendGetRequestByID(id : string) : Observable<Jugadores[]> {
    return this.httpClient.get<Jugadores[]>(`https://footbal-api.herokuapp.com/players?id=${id}`);
  }
}