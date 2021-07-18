import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaEquiposComponent } from './busqueda-equipos.component';

describe('BusquedaEquiposComponent', () => {
  let component: BusquedaEquiposComponent;
  let fixture: ComponentFixture<BusquedaEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
