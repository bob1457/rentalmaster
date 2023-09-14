import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalProperty } from '../models/rental-property';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getRentalProperties(): Observable<RentalProperty[]> {
    return this.http.get<RentalProperty[]>('../../assets/properties.json');
  }

  getRentalProperty(id: number): Observable<RentalProperty> {
    return this.http.get<RentalProperty>('../../assets/properties.json');
  }
}
