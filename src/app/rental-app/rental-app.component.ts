import { Component, inject } from '@angular/core';
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
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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

  env = environment.production;

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
  submittedOk = false;
  
  properties: RentalProperty[] = []; //properties$: Observable<RentalProperty>[] = [];
  
  private isVisible: boolean = false;

  #rentalService = inject(RentalService);

  constructor(//private rentalService: RentalService,
              private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) {}

  ngOnInit() {  
    console.log('env', this.env);  

    this.applyForm = this.fb.group({

      occupants: this.fb.array([]),
      references: this.fb.array([]),

      FirstName : ['', Validators.required], 
      LastName : ['', Validators.required], 
      Email : ['', [Validators.required, Validators.email]],
      Telephone : ['', [Validators.required, Validators.minLength(10)]],  
      Occupants : [1, Validators.required], 
      CurrentAddress : [null],
      pets : [false],
      EmploymentStatus : ['', Validators.required],
      Employer : [''],
      Occupation : [''],
      LengthOfEmployment : [''],
      AnnualIncome : [''],
      OtherIncome : [''],
      ReasonToMove: [''],
      AdditionalInfo: [''],      

    });

    this.#rentalService.getRentalProperties().subscribe((data) => {
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
      FullName : ['', Validators.required], 
      Relation : ['', Validators.required],
      Minor : [false],
      Index: [],
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
      FullName : ['', Validators.required], 
      Relation : ['', Validators.required],
      ContactTel : ['', [Validators.required, Validators.minLength(10)]],
      ContactEmail : ['', [Validators.required,Validators.email]],
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

  onSelectReference(references): void {
    console.log('selected references', references)
    // this.selectedProperty.references = references;
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

  onSelectRelation(relation, index) {
    // let current = this.occupants().controls[index] as FormGroup;
    // current.controls['Index'].valueChanges.subscribe((value) => {
    //     console.log('value changed', value)
    //   });
    // console.log('current form', current)
    // let value = current.controls['Index'].value;
    // console.log('value', value)
    // console.log('selected relation', relation)
    // console.log(index)
    // Not implemented
    relation == ('Child') ? this.child = true : this.child = false
  }

  showRefForm() {
    this.showRef = true;
  }


  submitForm() {
    this.loading = true;
    this.applyForm.value.rentalPropertyId = this.selectedPropertyId;
    this.applyForm.value.occupants.forEach(o => {
        if(o.Relation != 'Child') {
          o.Minor = false
        }
    });    
    console.log('form submit', this.applyForm.value)
    // console.log('form submitted')

    // this.openSnackBar('Application submitted successfully!', 'Close'); // local test
    debugger;
    this.#rentalService.submitRentalApplication(this.applyForm.value).subscribe((data) => {
      console.log('application submitted', data)
      this.loading = false;
      this.openSnackBar('Application submitted successfully!', 'Close');
      this.resetForm();
      // this.router.navigate(['/']);
      this.showApplyForm = false; 
      this.submittedOk = true;
      setTimeout(() => {
        this.submittedOk = false;
      }, 2000);
      
    });
  }

  resetForm() {
    this.applyForm.reset();
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
