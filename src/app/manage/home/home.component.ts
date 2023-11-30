import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AssistantComponent } from 'src/app/assistant/assistant.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from 'src/app/footer/footer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PropertyTypePieChartComponent } from 'src/app/charts/property-type-pie-chart/property-type-pie-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FontAwesomeModule,
    NgIf,
    RouterModule,
    AssistantComponent,
    FooterComponent,
    NgxChartsModule,
    PropertyTypePieChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openAssistant = false;

  propertyData =[    
    {"House": "30"},
    {"Condo": "25"},
    {"Townhouse": "20"},
    {"Duplex": "20"},
    {"Other": "5"}
  ]

  rentalStatusData = [
    {"Vacant": "10"},
    {"Occupied": "15"},
    {"Pending": "20"},
    {"Other": "5"}
  ]

  rentalLocationData = [
    {"Vancouver": "10"},
    {"Surrey": "15"},
    {"Coquitlam": "20"},
    {"Port Coquitlam": "20"},
    {"Langley": "5"},
    {"Maple Ridge": "6"},
    {"North Vancouver": "10"},
    {"Other": "6"}
  ]
  

  assitOpenClose() {
    this.openAssistant = !this.openAssistant;
  }

}
