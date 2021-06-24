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
    'Nombre del Jugador' : "jonay",
    id : "123456789",
    Avatar : "https://steamavatar.io/img/14773518797UrEY.png",
    teamId:"8154f4cb-246b-4bf9-bc64-51f8661b6781"
  }

  constructor(private route : ActivatedRoute, private juadoresService : JugadoresService) { 
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  

  ngOnInit(): void {
  }

  guardar() {
    this.juadoresService.sendPostRequest(this.jugador).subscribe(data => {
      console.log(data);
    });
  }

}