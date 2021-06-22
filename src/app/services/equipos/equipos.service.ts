import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos } from 'src/app/interfaces/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(public httpClient: HttpClient) { }

  sendGetRequest() : Observable<Equipos[]> {
    return this.httpClient.get<Equipos[]>('http://localhost:3000/teams');
  }
}
