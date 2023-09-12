import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
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
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule
  ],
  templateUrl: './rental-app.component.html',
  styleUrls: ['./rental-app.component.css']
})
export class RentalAppComponent {

  // selectedProperty: RentalProperty = [];
  
  properties: RentalProperty[] = []; //properties$: Observable<RentalProperty>[] = [];
  
  private isVisible: boolean = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit() {    
    this.rentalService.getRentalProperties().subscribe((data) => {
      this.properties = data
      console.log('rental property list', this.properties)
    }); 
  }

  onSelectProperty(property: RentalProperty): void {
    // this.selectedProperty = property;
    console.log('selected property', property)
  }

}
