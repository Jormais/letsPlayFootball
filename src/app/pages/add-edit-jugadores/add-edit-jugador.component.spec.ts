import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditjugadorComponent } from './add-edit-jugador.component';

describe('AddEditjugadorComponent', () => {
  let component: AddEditjugadorComponent;
  let fixture: ComponentFixture<AddEditjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
