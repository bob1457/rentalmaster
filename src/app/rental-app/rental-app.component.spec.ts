import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAppComponent } from './rental-app.component';

describe('RentalAppComponent', () => {
  let component: RentalAppComponent;
  let fixture: ComponentFixture<RentalAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RentalAppComponent]
    });
    fixture = TestBed.createComponent(RentalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
