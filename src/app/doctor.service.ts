import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private baseUrl = 'http://localhost:8080/api/v1/doctors';

  constructor(private httpClient: HttpClient) {}

  // Get all doctors
  getAllDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }

  // Create a dorctor
  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, doctor);
  }

  // Get a Doctor by Id
  getDrById(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
  }

  // update patient count by +1 by Doctor ID - when a new Patient is created
  updatePatientCount(id: number) {
    return this.httpClient.put(`${this.baseUrl}/pcount/${id}`, null);
  }
}
