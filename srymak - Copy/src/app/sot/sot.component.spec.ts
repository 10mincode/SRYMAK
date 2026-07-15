import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotComponent } from './sot.component';

describe('SotComponent', () => {
  let component: SotComponent;
  let fixture: ComponentFixture<SotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
