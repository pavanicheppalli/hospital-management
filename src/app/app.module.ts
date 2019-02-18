import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './pages/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { DoctorCalenderComponent } from './pages/doctor-calender/doctor-calender.component';
import { DoctorHistoryComponent } from './pages/doctor-history/doctor-history.component';
import { DoctorAppointmentsRequestsComponent } from './pages/doctor-appointments-requests/doctor-appointments-requests.component';
import { DoctorAppointmentsComponent } from './pages/doctor-appointments/doctor-appointments.component';
import { HeaderComponent } from './components/site/header/header.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { HospitalEntitiesComponent } from './components/site/hospital-entities/hospital-entities.component';
import { TestimonalsComponent } from './components/site/testimonals/testimonals.component';
import { ContactUsComponent } from './components/site/contact-us/contact-us.component';
import { OrganizationLocationComponent } from './components/site/organization-location/organization-location.component';



@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomepageComponent,
    DoctorDashboardComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorProfileComponent,
    DoctorCalenderComponent,
    DoctorHistoryComponent,
    DoctorAppointmentsRequestsComponent,
    DoctorAppointmentsComponent,
    HeaderComponent,
    FooterComponent,
    HospitalEntitiesComponent,
    TestimonalsComponent,
    ContactUsComponent,
    OrganizationLocationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAA0LXzblbpf9dTt-nnfI4SJxmxsHh1ZXs'
    }),
    NgSelectModule, 
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
