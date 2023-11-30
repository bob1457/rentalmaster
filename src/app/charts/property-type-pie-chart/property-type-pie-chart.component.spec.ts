import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypePieChartComponent } from './property-type-pie-chart.component';

describe('PropertyTypePieChartComponent', () => {
  let component: PropertyTypePieChartComponent;
  let fixture: ComponentFixture<PropertyTypePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTypePieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyTypePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
