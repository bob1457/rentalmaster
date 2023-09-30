import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalProperty } from '../models/rental-property';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  API_URL = '../../assets/properties.json'
  // API_URL = 'http://localhost:7071/api/httpApi';

  constructor(private http: HttpClient) { }

  getRentalProperties(): Observable<RentalProperty[]> {
    return this.http.get<RentalProperty[]>(this.API_URL);
  }

  getRentalProperty(id: number): Observable<RentalProperty> {
    return this.http.get<RentalProperty>(this.API_URL);
  }

  submitRentalApplication(application: any): Observable<any> {
    return this.http.post<any>(this.API_URL, application);    
  }
}
