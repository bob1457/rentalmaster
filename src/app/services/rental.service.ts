import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalProperty } from '../models/rental-property';
import { environment } from '../../environments/environment';
// import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  // API_URL = '../../assets/properties.json'
  // API_URL = '/api/';
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getRentalProperties(): Observable<RentalProperty[]> {
    return this.http.get<RentalProperty[]>(`${this.API_URL}all`);
    // return this.http.get<RentalProperty[]>(`${this.API_URL}`);
  }

  getRentalProperty(id: number): Observable<RentalProperty> {
    return this.http.get<RentalProperty>(this.API_URL);
  }

  submitRentalApplication(application: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}apply`, application);    
  }
}
