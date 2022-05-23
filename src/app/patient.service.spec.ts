import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PatientService } from './patient.service';
import { HttpClient } from '@angular/common/http';

describe('PatientService', () => {
  let service: PatientService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService],
    });

    service = TestBed.inject(PatientService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('Patient service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Calling Create Patient', () => {
    const inputData = {
      id: 20,
      name: 'Sandip Das',
      age: 23,
      visitedDr: 'Salman Khan',
      dateOfVisit: new Date(),
      pescription: 'Not available',
    };

    service
      .createPatient(inputData)
      .subscribe((data) => expect(data).toEqual(inputData));

    const req = httpController.expectOne(
      'http://localhost:8080/api/v1/patients'
    );

    expect(req.request.method).toEqual('POST');

    expect(service).toBeTruthy();

    req.flush(inputData);
  });

  it('Calling getPatientById', () => {
    const id = 2;
    const inputData = {
      id: 2,
      name: 'Sandip Das',
      age: 23,
      visitedDr: 'Salman Khan',
      dateOfVisit: new Date(),
      pescription: 'Not available',
    };

    service
      .getPatientById(id)
      .subscribe((data) => expect(data).toEqual(inputData));

    const req = httpController.expectOne(
      'http://localhost:8080/api/v1/patients/2'
    );

    expect(req.request.method).toEqual('GET');

    expect(service).toBeTruthy();

    req.flush(inputData);
  });
});
