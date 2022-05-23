import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/api/v1/patients';

  constructor(private httpClient: HttpClient) {}

  // Craete a Patient
  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, patient);
  }

  //Get a patient by Id
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }
}
