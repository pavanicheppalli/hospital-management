import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLocationComponent } from './organization-location.component';

describe('OrganizationLocationComponent', () => {
  let component: OrganizationLocationComponent;
  let fixture: ComponentFixture<OrganizationLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
