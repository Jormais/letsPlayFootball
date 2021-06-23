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

  

  constructor(private burquedaService : BusquedaService, private router : Router) { }

  ngOnInit(): void {
  }

  busqueda(respuesta : NgForm) {

    if (respuesta.value.search === "") {
      alert("La búsqueda no debe estar vacía");
    }else {
      this.burquedaService.search = respuesta.value.search;
      this.router.navigateByUrl("busqueda").then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });

    }

  }

}
