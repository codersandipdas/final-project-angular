import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { FormsModule } from '@angular/forms';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, DoctorsListComponent, CreateDoctorComponent, CreatePatientComponent, PatientsListComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
