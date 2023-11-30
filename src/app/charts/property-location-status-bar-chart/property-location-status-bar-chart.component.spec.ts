import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLocationStatusBarChartComponent } from './property-location-status-bar-chart.component';

describe('PropertyLocationStatusBarChartComponent', () => {
  let component: PropertyLocationStatusBarChartComponent;
  let fixture: ComponentFixture<PropertyLocationStatusBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyLocationStatusBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyLocationStatusBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
