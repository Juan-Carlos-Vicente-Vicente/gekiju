import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datosv2Component } from './datosv2.component';

describe('Datosv2Component', () => {
  let component: Datosv2Component;
  let fixture: ComponentFixture<Datosv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datosv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datosv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
