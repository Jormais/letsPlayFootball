import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos } from 'src/app/interfaces/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  idEquipo : string = "";

  constructor(public httpClient: HttpClient) { }

  sendGetRequest() : Observable<Equipos[]> {
    return this.httpClient.get<Equipos[]>('http://localhost:3000/teams');
  }

  sendPostRequest(equipo : Equipos) : Observable<Equipos> {
    return this.httpClient.post<Equipos>('http://localhost:3000/teams', equipo);
  }

  sendPutRequest(equipo : Equipos, id :string) : Observable<Equipos> {
    return this.httpClient.put<Equipos>(`http://localhost:3000/teams/${id}`, equipo)
  }

  sendDeleteRequest(id : string) : Observable<Equipos> {
    return this.httpClient.delete<Equipos>(`http://localhost:3000/teams/${id}`)
  }
  
}
