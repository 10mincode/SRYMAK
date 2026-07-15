import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMultiplayerComponent } from './quiz-multiplayer.component';

describe('QuizMultiplayerComponent', () => {
  let component: QuizMultiplayerComponent;
  let fixture: ComponentFixture<QuizMultiplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMultiplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMultiplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
