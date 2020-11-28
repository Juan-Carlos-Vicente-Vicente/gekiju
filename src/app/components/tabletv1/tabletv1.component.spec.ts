import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabletv1Component } from './tabletv1.component';

describe('Tabletv1Component', () => {
  let component: Tabletv1Component;
  let fixture: ComponentFixture<Tabletv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabletv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabletv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
