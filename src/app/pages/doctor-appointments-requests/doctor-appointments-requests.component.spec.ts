import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsRequestsComponent } from './doctor-appointments-requests.component';

describe('DoctorAppointmentsRequestsComponent', () => {
  let component: DoctorAppointmentsRequestsComponent;
  let fixture: ComponentFixture<DoctorAppointmentsRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentsRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
