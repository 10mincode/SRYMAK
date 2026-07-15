import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SestComponent } from './sest.component';

describe('SestComponent', () => {
  let component: SestComponent;
  let fixture: ComponentFixture<SestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
