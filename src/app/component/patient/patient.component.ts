import { Component, OnInit } from '@angular/core';
import { Patient } from '../../model/patient';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void{
    this.patientService.getPatients().subscribe(patients => this.patients = patients);
  }
}
