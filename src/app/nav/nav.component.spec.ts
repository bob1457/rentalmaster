import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NavComponent]
    });
    // fixture = TestBed.createComponent(NavComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'Rental Master\'', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Welcome to Rental Master');
  });
});
