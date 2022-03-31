import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemissionComponent } from './updatemission.component';

describe('UpdatemissionComponent', () => {
  let component: UpdatemissionComponent;
  let fixture: ComponentFixture<UpdatemissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
