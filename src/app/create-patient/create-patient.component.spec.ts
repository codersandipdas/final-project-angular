import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatePatientComponent } from './create-patient.component';
import { PatientService } from '../patient.service';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;

  let http: HttpClient;
  let httpController: HttpTestingController;
  let pService: PatientService;

  let fixture: ComponentFixture<CreatePatientComponent>;

  const inputData = {
    id: 20,
    name: 'Sandip Das',
    age: 23,
    visitedDr: 'Salman Khan',
    dateOfVisit: new Date(),
    pescription: 'Not available',
  };

  const getAllDrData = [
    {
      id: 20,
      name: 'Sandip Das',
      age: 52,
      gender: 'MALE',
      specialist: 'MBBS',
      patientCount: 0,
    },
    {
      id: 21,
      name: 'Sandip Das',
      age: 52,
      gender: 'MALE',
      specialist: 'MBBS',
      patientCount: 0,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CreatePatientComponent],
      providers: [PatientService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get all doctors', () => {
    let mockDrService = jasmine.createSpyObj(['getAllDoctors']);
    let mockPatientService = jasmine.createSpyObj(['createPatient']);
    component = new CreatePatientComponent(
      mockPatientService,
      mockDrService,
      mockPatientService
    );

    mockDrService.getAllDoctors.and.returnValue(of(true));
    component.doctors = getAllDrData;

    expect(component.doctors).toEqual(getAllDrData);
  });

  it('should create a new Patients `savePatients()`', fakeAsync(() => {
    let fixture1 = TestBed.createComponent(CreatePatientComponent);
    let component1 = fixture1.debugElement.componentInstance;

    let pService = fixture.debugElement.injector.get(PatientService);
    let stub = spyOn(pService, 'createPatient').and.callFake(() => {
      return of([]).pipe(delay(300));
    });

    component1.savePatients();
    tick(300);
    expect(stub).toHaveBeenCalledTimes(1);
  }));

  it('should go to all user `/`', () => {
    expect(component.goToAllUser()).toBe();
  });

  it(' Form onSbmit()', () => {
    expect(component.onSubmit()).toBe();
  });
});
