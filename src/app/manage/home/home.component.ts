import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AssistantComponent } from '../../assistant/assistant.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from '../../footer/footer.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PropertyTypePieChartComponent } from '../../charts/property-type-pie-chart/property-type-pie-chart.component';
import { PropertyLocationStatusBarChartComponent } from '../../charts/property-location-status-bar-chart/property-location-status-bar-chart.component';
import { PropertyStatusPieChartComponent } from '../../charts/property-status-pie-chart/property-status-pie-chart.component';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        CommonModule,
        // MatButtonModule,
        // MatIconModule,
        MatTabsModule,
        // FontAwesomeModule,
        // NgIf,
        // RouterModule,
        // AssistantComponent,
        // FooterComponent,
        // // NgxChartsModule,
        // PropertyTypePieChartComponent,
        // PropertyLocationStatusBarChartComponent,
        // PropertyStatusPieChartComponent,
        DashboardComponent
    ]
})
export class HomeComponent {

  openAssistant = false;

  dashboardPage = true;
  propertyPage = false;
  tenantPage = false;

  openDashboardPage() {
    console.log('clicked to open dashboard page');
    this.dashboardPage = true;
    this.propertyPage = false;
    this.tenantPage = false;
  }

  openPropertyPage() {
    console.log('clicked to open property page');
    this.dashboardPage = false;
    this.propertyPage = true;
    this.tenantPage = false;
  }

  openTenantPage() {
    console.log('clicked to open tenant page');
    this.dashboardPage = false;
    this.propertyPage = false;
    this.tenantPage = true;
  }

  // propertyData =[    
  //   {"House": "30"},
  //   {"Condo": "25"},
  //   {"Townhouse": "20"},
  //   {"Duplex": "20"},
  //   {"Other": "5"}
  // ]

  // rentalStatusData = [
  //   {"Vacant": "10"},
  //   {"Occupied": "15"},
  //   {"Pending": "20"},
  //   {"Other": "5"}
  // ]

  // rentalLocationData = [
  //   {"Vancouver": "10"},
  //   {"Surrey": "15"},
  //   {"Coquitlam": "20"},
  //   {"Port Coquitlam": "20"},
  //   {"Langley": "5"},
  //   {"Maple Ridge": "6"},
  //   {"North Vancouver": "10"},
  //   {"Other": "6"}
  // ]
  

  // assitOpenClose() {
  //   this.openAssistant = !this.openAssistant;
  // }

}
