import { Component, OnInit } from '@angular/core';

export interface DialogData {
  exercise: any;
}

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  public exercise = {
    id: 1,
    label: 'Row, Seated Cable',
    muscleGroup: 'back',
    icon: 'fitness_center',
    targetWeight: 9,
    equipment: 'smith',
    status: 'in-progress',
    sets: [
      { index: 0, reps: 10, weight: 9, status: 'complete' },
      { index: 1, reps: 0, weight: 9, status: 'in-progress' },
      { index: 2, reps: 0, weight: 9, status: 'not-started' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuSelect() {}

  public onBackClick() {}

  public onAddSetClick() {
    const index = this.exercise.sets.length;
    this.exercise.sets.push({ index, reps: 0, weight: 0, status: 'not-started' });
  }

}
