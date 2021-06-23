import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusquedaService } from 'src/app/services/busqueda/busqueda.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(private burquedaService : BusquedaService) { }

  ngOnInit(): void {
  }

  busqueda(respuesta : NgForm) {
    
    if (respuesta.value.search === "") {
      alert("La búsqueda no debe estar vacía");
    }else {
      this.burquedaService.search = respuesta.value.search
      console.log(this.burquedaService.search);
    }
  }

}
