import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  search : string = "";
  tipoDeBusqueda : string = "";

  constructor() { }
}
