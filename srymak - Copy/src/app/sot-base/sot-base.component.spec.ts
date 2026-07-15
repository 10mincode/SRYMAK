import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotBaseComponent } from './sot-base.component';

describe('SotBaseComponent', () => {
  let component: SotBaseComponent;
  let fixture: ComponentFixture<SotBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SotBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SotBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
