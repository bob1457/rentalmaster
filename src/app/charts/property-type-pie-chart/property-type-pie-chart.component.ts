import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-property-type-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './property-type-pie-chart.component.html',
  providers: [
    {provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  styleUrl: './property-type-pie-chart.component.css'
})
export class PropertyTypePieChartComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
