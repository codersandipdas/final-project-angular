import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateDoctorComponent } from './create-doctor.component';
import { DoctorService } from '../doctor.service';
import { Observable } from 'rxjs';

describe('CreateDoctorComponent', () => {
  let component: CreateDoctorComponent;
  let fixture: ComponentFixture<CreateDoctorComponent>;
  let doctorService: DoctorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CreateDoctorComponent],
      providers: [DoctorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoctorComponent);
    component = fixture.componentInstance;
    doctorService = TestBed.get(DoctorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' should go to all user', () => {
    expect(component.goToAllUser()).toBe();
  });

  it(' should saveDoctor() on form submit', () => {
    expect(component.onSubmit()).toBe();
  });
});
