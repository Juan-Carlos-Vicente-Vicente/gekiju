import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datosv3Component } from './datosv3.component';

describe('Datosv3Component', () => {
  let component: Datosv3Component;
  let fixture: ComponentFixture<Datosv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datosv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datosv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
