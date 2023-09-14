import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RentalProperty } from '../models/rental-property';
import { RentalService } from '../services/rental.service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-rental-app',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatButtonModule, 
    MatSelectModule,
    MatFormFieldModule, 
    NgIf, 
    NgFor, 
    MatInputModule, 
    FormsModule
  ],
  templateUrl: './rental-app.component.html',
  styleUrls: ['./rental-app.component.css']
})
export class RentalAppComponent {

  selectedProperty: any = {};
  show = false;
  selectedPropertyId: number;
  
  properties: RentalProperty[] = []; //properties$: Observable<RentalProperty>[] = [];
  
  private isVisible: boolean = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit() {    
    this.rentalService.getRentalProperties().subscribe((data) => {
      this.properties = data
      console.log('rental property list', this.properties)
    }); 
  }

  onSelectProperty(propertyId): void {
    
    console.log('selected property id', propertyId)
    this.selectedPropertyId = propertyId;
    this.selectedProperty = this.properties.find(property => property.id === propertyId);
    if(this.selectedProperty) {
      this.show = true;
    }
    // console.log(this.selectedProperty)
  }



}
