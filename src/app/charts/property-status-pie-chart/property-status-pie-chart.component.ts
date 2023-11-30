import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-property-status-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './property-status-pie-chart.component.html',
  styleUrl: './property-status-pie-chart.component.css'
})
export class PropertyStatusPieChartComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 100, 500, 400 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
