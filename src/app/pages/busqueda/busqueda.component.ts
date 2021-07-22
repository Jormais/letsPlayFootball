import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  busqueda : string = "";
  jugadores : Jugadores[] = [];
  jugadoresFiltrados : Jugadores[] = [];

  constructor(private playerService : PlayerService) { 
    this.busqueda = localStorage.getItem("busqueda") || "";
    console.log(this.busqueda);
    playerService.getPlayer().subscribe( jugador => {
      this.jugadores = jugador;
      this.jugadoresFiltrados = this.jugadores.filter( j => j['Nombre del Jugador'].toLowerCase().indexOf(this.busqueda.toLowerCase()) !== -1)
    });
  }

  ngOnInit(): void { }

}
