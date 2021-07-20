import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leagues } from 'src/app/interfaces/leagues';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  idLeague : string = "";
  apiUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { console.log(this.apiUrl); }

  sendGetRequest() : Observable<Leagues[]> {
    return this.httpClient.get<Leagues[]>(this.apiUrl + 'leagues');
  }

}
