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

  filter: Filter = {gender: '', encounter: '', observation: ''};

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients(this.filter)
      .subscribe(patients => this.patients = patients);
  }

  getPatients(): void {
    this.patientService.getPatients(this.filter)
      .subscribe(patients => this.patients = patients);
  }

}

export class Filter {
  gender: string;
  encounter: string;
  observation: string;
}

