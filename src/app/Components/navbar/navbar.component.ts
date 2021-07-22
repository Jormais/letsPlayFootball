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
  jugador :string = "";
  equipo : string = "";
  checkboxes : any;

  constructor(private router : Router) { 
    this.checkboxes = document.getElementsByName('dinamico');
  }

  ngOnInit(): void {
  }

  

  setTipoDeBusqueda(tipo : string) {    
    if (tipo === 'jugador') {
      console.log("entra en jugador");
      this.porJugadorPorEquipo = tipo;
      this.jugador = tipo;
      console.log(this.jugador);
    } else if (tipo === 'equipo') {
      console.log("entra en equipo");
      this.porJugadorPorEquipo = tipo;
      this.equipo = tipo;
      console.log(this.equipo);
    }
    if (this.jugador === "jugador" && this.equipo === "equipo") {
      alert("Solo puedes escoger un tipo de búsqueda");
      this.jugador = "";
      this.equipo = "";
      this.porJugadorPorEquipo = "";
      this.checkboxes[0].checked = 0;
      this.checkboxes[1].checked = 0;
    }

  }

  busqueda(respuesta : NgForm) {
    if(this.porJugadorPorEquipo === "") {
      alert("el tipo de búsqueda no puede estar vacio");
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
