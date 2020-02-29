import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDifficultyComponent } from './exercise-difficulty.component';

describe('ExerciseDifficultyComponent', () => {
  let component: ExerciseDifficultyComponent;
  let fixture: ComponentFixture<ExerciseDifficultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDifficultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
