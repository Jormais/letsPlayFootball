import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  id :string = "";

  constructor(private route : ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
  }

}
