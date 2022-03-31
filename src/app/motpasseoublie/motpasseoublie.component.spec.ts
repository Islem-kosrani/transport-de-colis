import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotpasseoublieComponent } from './motpasseoublie.component';

describe('MotpasseoublieComponent', () => {
  let component: MotpasseoublieComponent;
  let fixture: ComponentFixture<MotpasseoublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotpasseoublieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotpasseoublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
