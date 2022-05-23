import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[];
  filteredDr: Doctor[];

  drSelected: number;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
    this.drSelected = 0;
  }

  // function for Fetching all doctors from API
  private getDoctors() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

  // function for Show Doctor full info table - handler
  showDrInfo() {
    console.log(this.drSelected);

    if (this.drSelected === 0) {
      console.log('Select a dr first');
    } else {
      this.filteredDr = this.doctors.filter((x) => x.id == this.drSelected);
      console.log(this.filteredDr);
    }
  }
}
