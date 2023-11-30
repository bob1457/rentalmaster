import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { RentalAppComponent } from './rental-app/rental-app.component';
import { FooterComponent } from './footer/footer.component';
import { NgChartsConfiguration } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NavComponent,
    FooterComponent,
    RentalAppComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class AppComponent {
  title = 'Rental Master';
}
