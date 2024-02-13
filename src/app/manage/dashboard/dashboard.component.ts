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

@Component({
  selector: 'app-dashboard',
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
    PropertyTypePieChartComponent,
    PropertyLocationStatusBarChartComponent,
    PropertyStatusPieChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
