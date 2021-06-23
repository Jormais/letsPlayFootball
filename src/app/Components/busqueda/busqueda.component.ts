import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  busqueda : string = this.burquedaService.search;

  constructor(private burquedaService : BusquedaService) { }

  ngOnInit(): void {
    console.log(this.busqueda);
    
  }

}
