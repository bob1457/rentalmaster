import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-property-location-status-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './property-location-status-bar-chart.component.html',
  styleUrl: './property-location-status-bar-chart.component.css'
})
export class PropertyLocationStatusBarChartComponent {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}
