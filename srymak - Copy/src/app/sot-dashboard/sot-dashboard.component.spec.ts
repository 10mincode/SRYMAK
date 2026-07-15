import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotDashboardComponent } from './sot-dashboard.component';

describe('SotDashboardComponent', () => {
  let component: SotDashboardComponent;
  let fixture: ComponentFixture<SotDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SotDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SotDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
