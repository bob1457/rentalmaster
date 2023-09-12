import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalAppComponent } from '../rental-app/rental-app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RentalAppComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
