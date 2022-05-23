import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css'],
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient();
  doctors: Doctor[];

  selectedDr: any;

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDoctors();
    this.selectedDr = 0;
  }

  private getDoctors() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

  savePatients() {
    this.patientService.createPatient(this.patient).subscribe(
      (data) => {
        this.doctorService
          .updatePatientCount(Number(this.patient.visitedDr))
          .subscribe(
            (data) => console.log(data),
            (error) => console.log(error)
          );
        console.log(data);
        this.goToAllUser();
      },
      (error) => console.log(error)
    );
  }

  goToAllUser() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.patient.visitedDr = this.selectedDr;
    this.patient.pescription = 'Not uploaded!';
    this.savePatients();
  }
}
