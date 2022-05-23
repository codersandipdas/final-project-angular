import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService],
    });
    service = TestBed.inject(DoctorService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Doctor Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Calling createDoctor', () => {
    const inputData = {
      id: 2,
      name: 'Sandip Das',
      age: 23,
      gender: 'Male',
      specialist: 'MBBS',
      patientCount: 1,
    };

    service
      .createDoctor(inputData)
      .subscribe((data) => expect(data).toEqual(inputData));

    const req = httpController.expectOne(
      'http://localhost:8080/api/v1/doctors'
    );

    expect(req.request.method).toEqual('POST');

    expect(service).toBeTruthy();

    req.flush(inputData);
  });
  //

  it('Calling getAllDoctors', () => {
    const inputData = [
      {
        id: 2,
        name: 'Sandip Das',
        age: 23,
        gender: 'Male',
        specialist: 'MBBS',
        patientCount: 1,
      },
    ];

    service
      .getAllDoctors()
      .subscribe((data) => expect(data).toEqual(inputData));

    const req = httpController.expectOne(
      'http://localhost:8080/api/v1/doctors'
    );

    expect(req.request.method).toEqual('GET');

    expect(service).toBeTruthy();

    req.flush(inputData);
  });

  it('should call get dr by id', () => {
    const inputData = {
      id: 2,
      name: 'Sandip Das',
      age: 23,
      gender: 'Male',
      specialist: 'MBBS',
      patientCount: 1,
    };

    service.getDrById(2).subscribe((data) => expect(data).toEqual(inputData));

    const req = httpController.expectOne(
      'http://localhost:8080/api/v1/doctors/2'
    );

    expect(service).toBeTruthy();

    req.flush(inputData);
  });
});
