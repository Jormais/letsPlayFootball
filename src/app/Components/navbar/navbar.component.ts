import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  porJugadorPorEquipo :string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  

  setTipoDeBusqueda(tipo : string) {
    console.log(tipo);
    this.porJugadorPorEquipo = tipo;
    alert("Ha elegido buscar por " + this.porJugadorPorEquipo);
  }

  busqueda(respuesta : NgForm) {
    if(this.porJugadorPorEquipo === "") {
      alert("el tipo de búsqueda no puede estar vacio")
    } else if (this.porJugadorPorEquipo === "jugador") {
      if (respuesta.value.search === "") {
        alert("La búsqueda no debe estar vacía");
      }else {
        localStorage.setItem("busqueda", respuesta.value.search)
        this.router.navigateByUrl("busqueda").then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
    } else if (this.porJugadorPorEquipo === "equipo") {
      if (respuesta.value.search === "") {
        alert("La búsqueda no debe estar vacía");
      }else {
        localStorage.setItem("busqueda", respuesta.value.search)
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
