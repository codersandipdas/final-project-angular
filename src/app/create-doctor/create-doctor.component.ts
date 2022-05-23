import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Gender } from '../gender';
import { Speciality } from '../speciality';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css'],
})
export class CreateDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  gender: Gender[];
  speciality: Speciality[];
  gSelected: string;
  spclSelected: string;

  constructor(private doctorService: DoctorService, private router: Router) {}

  ngOnInit(): void {
    this.gender = [{ gName: 'Male' }, { gName: 'Female' }, { gName: 'Others' }];
    this.gSelected = 'Male';

    this.speciality = [
      { dSpeciality: 'MBBS' },
      { dSpeciality: 'Dental' },
      { dSpeciality: 'Ear' },
      { dSpeciality: 'Skin' },
    ];
    this.spclSelected = 'MBBS';
  }

  saveDoctor() {
    this.doctorService.createDoctor(this.doctor).subscribe(
      (data) => {
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
    console.log(this.doctor);
    this.doctor.gender = this.gSelected;
    this.doctor.specialist = this.spclSelected;
    this.saveDoctor();
  }
}
