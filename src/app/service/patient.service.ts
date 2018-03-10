import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Patient } from '../model/patient';
import { Filter } from '../component/patient/patient.component';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientService {

  private BASEURL = 'http://localhost:8091/patients';

  constructor(private http: HttpClient) { }

  getPatients(filter: Filter): Observable<Patient[]> {
    let params = new HttpParams();
    params = params.set('gender', filter.gender.toString())
      .set('encounter', filter.encounter.toString())
      .set('observation', filter.observation.toString());

    return this.http.get<Patient[]>(this.BASEURL, { params });
  }

}
