import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalProperty } from '../models/rental-property';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  // API_URL = 'http://localhost:3000/applications'
  API_URL = '../../assets/properties.json'

  constructor(private http: HttpClient) { }

  getRentalProperties(): Observable<RentalProperty[]> {
    return this.http.get<RentalProperty[]>('../../assets/properties.json');
  }

  getRentalProperty(id: number): Observable<RentalProperty> {
    return this.http.get<RentalProperty>(this.API_URL);
  }

  submitRentalApplication(application: any): Observable<any> {
    return this.http.post<any>(this.API_URL, application);    
  }
}
