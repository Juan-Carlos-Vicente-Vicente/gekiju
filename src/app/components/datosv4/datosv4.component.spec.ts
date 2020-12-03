import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datosv4Component } from './datosv4.component';

describe('Datosv4Component', () => {
  let component: Datosv4Component;
  let fixture: ComponentFixture<Datosv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datosv4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datosv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
