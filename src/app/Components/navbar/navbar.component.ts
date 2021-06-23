import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  prueba(cosa : NgForm) {
    console.log(cosa.value);
  }

}
