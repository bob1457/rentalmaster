import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RentalProperty } from '../models/rental-property';
import { RentalService } from '../services/rental.service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

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
    ReactiveFormsModule,
    FormsModule,    
    MatInputModule, 
    MatCheckboxModule, 
    MatSnackBarModule,  
    MatMenuModule, 
    MatIconModule
  ],
  templateUrl: './rental-app.component.html',
  styleUrls: ['./rental-app.component.css']
})
export class RentalAppComponent {

  applyForm: FormGroup;

  loading = false;

  selectedProperty: any = {};
  show = false;
  showApply = false;
  showApplyForm = false;
  selectedPropertyId: number;  
  more = false;
  moreOccupant = 1;
  addOccupant = false;
  showRef = false;
  employed = false;
  child = false;
  
  properties: RentalProperty[] = []; //properties$: Observable<RentalProperty>[] = [];
  
  private isVisible: boolean = false;

  constructor(private rentalService: RentalService,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar) { 
      
      // this.applyForm = this.fb.group({
      //   'FirstName' : [null, Validators.required], 
      //   'LastName' : [null, Validators.required], 
      //   'Email' : [null, Validators.required],
      //   'Telephone' : [null, Validators.required],  
      //   'Occupants' : [1, Validators.required], 
      //   'CurrentAddress' : [null],
      //   'pets' : [false],
      //   'EmploymentStatus' : [null, Validators.required],
      //   'Employer' : [null],
      //   'Occupation' : [null],
      //   'AnnualIncome' : [null],
      //   'OtherIncome' : [null],
        
        

      // });

  }

  ngOnInit() {

    this.applyForm = this.fb.group({

      occupants: this.fb.array([]),
      references: this.fb.array([]),

      FirstName : [null, Validators.required], 
      LastName : [null, Validators.required], 
      Email : [null, Validators.required],
      Telephone : [null, Validators.required],  
      Occupants : [1, Validators.required], 
      CurrentAddress : [null],
      pets : [false],
      EmploymentStatus : [null, Validators.required],
      Employer : [null],
      Occupation : [null],
      LengthOfEmployment : [null],
      AnnualIncome : [null],
      OtherIncome : [null],
      ReasonToMove: [null],
      AdditionalInfo: [null],      

    });

    this.rentalService.getRentalProperties().subscribe((data) => {
      this.properties = data
      console.log('rental property list', this.properties)
    }); true
  }

  // FormArray

  occupants(): FormArray {
    return this.applyForm.get("occupants") as FormArray
  }

  newOccupant(): FormGroup {
    return this.fb.group({
      FullName : [null, Validators.required], 
      Relation : [null, Validators.required],
      Minor : [false],
    })
  }

  addOccupantFormGroup() {
    console.log('add occupant');
    this.occupants().push(this.newOccupant());
  }

  removeOccupantFormGroup(index:number) {
    this.occupants().removeAt(index);
  }

  references(): FormArray {
    return this.applyForm.get("references") as FormArray
  } 

  newReference(): FormGroup {
    return this.fb.group({
      FullName : [null, Validators.required], 
      Relation : [null, Validators.required],
      Telephone : [null, Validators.required],
      Email : [null, Validators.required],
    })
  }

  addReferenceFormGroup() {
    this.references().push(this.newReference());
  }

  removeReferenceFormGroup(index:number) {
    this.references().removeAt(index);
  }

  onSelectProperty(propertyId): void {
    
    console.log('selected property id', propertyId)
    this.selectedPropertyId = propertyId;
    this.selectedProperty = this.properties.find(property => property.id === propertyId);
    if(this.selectedProperty) {
      this.show = true;
      this.showApply = true;
    }
    // console.log(this.selectedProperty)
  }

  onSelectOccupants(occupants): void {
    console.log('selected occupants', occupants)
    // this.selectedProperty.occupants = occupants;
    this.moreOccupant = occupants;
  }

  showForm() {
    this.showApplyForm = true;  
  }

  // onMore(e) {
  //   // console.log('more', e)
  //   e.checked ? this.more = true : this.more = false;  
  // }

  onSelectEmployment(employedStatus): void {
    console.log('employment', employedStatus)
    employedStatus == ('Employed' ||'Self-employed') ? this.employed = true : this.employed = false;  
  }

  onChild(e) {
    console.log('child', e.checked)
  }

  onPets(e) {
    console.log('pets', e.checked)
  }

  showOccupantForm() {
    this.addOccupant = true;
  }

  onSmoking(e) {
    console.log('smoking', e.checked)
  }

  onSelectRelation(relation) {
    console.log('selected relation', relation)
    relation == 'Child' ? this.child = true : this.child = false
  }

  showRefForm() {
    this.showRef = true;
  }


  submitForm() {
    this.loading = true;
    // console.log('form submit', this.applyForm.value)
    // console.log('form submitted')

    // this.openSnackBar('Application submitted successfully!', 'Close'); // local test
    
    this.rentalService.submitRentalApplication(this.applyForm.value).subscribe((data) => {
      console.log('application submitted', data)
      this.loading = false;
      this.openSnackBar('Application submitted successfully!', 'Close');
      this.resetForm();
    });
  }

  resetForm() {
    this.applyForm.reset();
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
