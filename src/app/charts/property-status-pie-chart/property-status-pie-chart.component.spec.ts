import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStatusPieChartComponent } from './property-status-pie-chart.component';

describe('PropertyStatusPieChartComponent', () => {
  let component: PropertyStatusPieChartComponent;
  let fixture: ComponentFixture<PropertyStatusPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyStatusPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyStatusPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
