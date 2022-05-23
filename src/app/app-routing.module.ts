import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

const routes: Routes = [
  { path: '', component: DoctorsListComponent },
  { path: 'doctors', component: DoctorsListComponent },
  { path: 'add-doctor', component: CreateDoctorComponent },
  { path: 'add-patient', component: CreatePatientComponent },
  { path: 'patients', component: PatientsListComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },

  //{ path: '', redirectTo: 'doctors', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
