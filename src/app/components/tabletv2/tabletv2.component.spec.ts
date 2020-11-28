import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabletv2Component } from './tabletv2.component';

describe('Tabletv2Component', () => {
  let component: Tabletv2Component;
  let fixture: ComponentFixture<Tabletv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabletv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabletv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
