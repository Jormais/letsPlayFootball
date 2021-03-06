import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos } from 'src/app/interfaces/equipos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  idEquipo : string = "";
  apiUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  getTeamByID(id : string) : Observable<Equipos[]> {
    return this.httpClient.get<Equipos[]>(this.apiUrl  + `teams?id=${id}`);
  }

  getTeam() : Observable<Equipos[]> {
    return this.httpClient.get<Equipos[]>(this.apiUrl + 'teams');
  }

  createTeam(equipo : Equipos) : Observable<Equipos> {
    return this.httpClient.post<Equipos>(this.apiUrl + 'teams', equipo);
  }

  editTeam(equipo : Equipos, id :string) : Observable<Equipos> {
    return this.httpClient.put<Equipos>(this.apiUrl + `teams/${id}`, equipo)
  }

  deleteTeam(id : string) : Observable<Equipos> {
    return this.httpClient.delete<Equipos>(this.apiUrl + `teams/${id}`)
  }
  
}
