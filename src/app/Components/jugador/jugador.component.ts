import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  constructor(private route : ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  ngOnInit(): void {
  }

}
