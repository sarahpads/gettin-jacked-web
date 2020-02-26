import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  public exercises = [
    {
      id: 1,
      label: 'Row, Seated Cable',
      muscleGroup: 'back',
      icon: 'fitness_center',
      targetWeight: '9',
      targetReps: 10,
      equipment: 'smith',
      status: 'in-progress',
      sets: [
        { index: 0, reps: 10, weight: '9', status: 'complete' },
        { index: 1, reps: 15, weight: '9', status: 'in-progress' },
        { index: 2, reps: 15, weight: '9', status: 'not-started' },
        { index: 1, reps: 15, weight: '9', status: 'in-progress' },
        { index: 1, reps: 15, weight: '9', status: 'in-progress' },
        { index: 1, reps: 15, weight: '9', status: 'in-progress' }
      ]
    },
    {
      id: 2,
      label: 'Row, Spider',
      muscleGroup: 'back',
      icon: 'fitness_center',
      targetWeight: '9',
      targetReps: 10,
      equipment: 'smith',
      status: 'complete',
      sets: [
        { index: 0, reps: 10, weight: '9', status: 'complete' },
        { index: 1, reps: 0, weight: '9', status: 'in-progress' },
        { index: 2, reps: 0, weight: '9', status: 'not-started' }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
