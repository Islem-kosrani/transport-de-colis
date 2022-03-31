import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueil0Component } from './accueil0.component';

describe('Accueil0Component', () => {
  let component: Accueil0Component;
  let fixture: ComponentFixture<Accueil0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accueil0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Accueil0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
