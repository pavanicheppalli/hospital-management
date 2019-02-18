import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: 'app/home', component: HomepageComponent },
  { path: 'app/doctor/dashboard', component: DoctorDashboardComponent },
  { path: 'app/doctor/login', component: DoctorLoginComponent },
  { path: 'app/doctor/register', component: DoctorRegisterComponent },
  { path: 'app/doctor/profile', component: DoctorProfileComponent },
  { path: 'app/doctor/calender', component: DoctorCalenderComponent },
  { path: 'app/doctor/history', component: DoctorHistoryComponent },
  { path: 'app/doctor/appointment_requests', component: DoctorAppointmentsRequestsComponent },
  { path: 'app/doctor/appointments', component: DoctorAppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
