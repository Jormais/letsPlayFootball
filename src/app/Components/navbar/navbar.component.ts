import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusquedaService } from 'src/app/services/busqueda/busqueda.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(private busquedaService : BusquedaService, private router : Router) { }

  ngOnInit(): void {
  }

  setTipoDeBusqueda(tipo : string) {
    console.log(tipo);
    this.busquedaService.tipoDeBusqueda = tipo;
    alert("Ha elegido buscar por " + tipo);
  }

  busqueda(respuesta : NgForm) {
    if(this.busquedaService.tipoDeBusqueda === "") {
      alert("el tipo de búsqueda no puede estar vacio")
    } else if (this.busquedaService.tipoDeBusqueda === "jugador") {
      if (respuesta.value.search === "") {
        alert("La búsqueda no debe estar vacía");
      }else {
        this.busquedaService.search = respuesta.value.search;
        this.router.navigateByUrl("busqueda").then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
    } else if (this.busquedaService.tipoDeBusqueda === "equipo") {
      if (respuesta.value.search === "") {
        alert("La búsqueda no debe estar vacía");
      }else {
        this.busquedaService.search = respuesta.value.search;
        this.router.navigateByUrl("busqueda-equipos").then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
    }
  }

  crearEditar(url :string) {
    this.router.navigateByUrl(url).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
