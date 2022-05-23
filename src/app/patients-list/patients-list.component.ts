import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements OnInit {
  // For Storing patient with the requested id after fetching
  filteredPatients: Patient = new Patient();

  //get selected Id from input box
  pSelected: number;

  // Show patient information box
  showPatient: boolean = false;

  // Show error box
  isNotFound: boolean = false;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {}

  // Get Patient with a Id
  showPatientInfo() {
    console.log(this.pSelected);
    this.patientService.getPatientById(this.pSelected).subscribe(
      (data) => {
        this.filteredPatients = data;
        let drId = data.visitedDr;

        // Getting Dr name with dr id
        this.doctorService.getDrById(Number(drId) || 14).subscribe(
          (data) => {
            this.filteredPatients.visitedDr = data.name;
            this.showPatient = true;
            this.isNotFound = false;
          },
          (error) => {
            console.log(error);
            if (error.error.message == 'Doctor with this ID do not exixts!') {
              this.filteredPatients.visitedDr = 'Not Available';
            }
          }
        ); // Getting Dr name with dr id ends
      },
      (error) => {
        console.log(error.error.message);
        if (error.error.message == 'Patient do not exixts!') {
          this.isNotFound = true;
          this.showPatient = false;
        }
      }
    );
  }
}
