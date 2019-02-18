import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalEntitiesComponent } from './hospital-entities.component';

describe('HospitalEntitiesComponent', () => {
  let component: HospitalEntitiesComponent;
  let fixture: ComponentFixture<HospitalEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
