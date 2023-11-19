import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveListingComponent } from './remove-listing.component';

describe('RemoveListingComponent', () => {
  let component: RemoveListingComponent;
  let fixture: ComponentFixture<RemoveListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
