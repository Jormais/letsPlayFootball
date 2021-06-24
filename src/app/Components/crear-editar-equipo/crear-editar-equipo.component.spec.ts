import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarEquipoComponent } from './crear-editar-equipo.component';

describe('CrearEditarEquipoComponent', () => {
  let component: CrearEditarEquipoComponent;
  let fixture: ComponentFixture<CrearEditarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
