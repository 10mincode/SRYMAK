import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHomeworkUploadComponent } from './teacher-homework-upload.component';

describe('TeacherHomeworkUploadComponent', () => {
  let component: TeacherHomeworkUploadComponent;
  let fixture: ComponentFixture<TeacherHomeworkUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherHomeworkUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHomeworkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
