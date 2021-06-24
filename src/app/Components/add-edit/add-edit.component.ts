import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { JugadoresService } from 'src/app/services/jugadores/jugadores.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  id :string = "";
  jugador : Jugadores = {
    'Nombre del Jugador' : "",
    id : "",
    Avatar : "",
    teamId:""
  }

  constructor(private route : ActivatedRoute, private juadoresService : JugadoresService) { 
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    
  }

  

  ngOnInit(): void {
  }

  guardar(jugador : Jugadores) {
    if (this.id === null) {
      console.log("Se ha llegado por el navbar");
      this.juadoresService.sendPostRequest(jugador).subscribe(data => {
        console.log(data);
      });
    } else {
      console.log("se ha llegado por el jugador");
      this.juadoresService.sendPutRequest(jugador, this.id).subscribe(data => {
        console.log(data);
        
      })
    }
  }

}