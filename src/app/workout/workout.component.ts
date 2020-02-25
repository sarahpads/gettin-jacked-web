import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  @ViewChild('list') public list;
  @ViewChild('menu') public menu;

  public exercises = [
    {
      id: 1,
      label: 'Row, Seated Cable',
      muscleGroup: 'back',
      icon: 'fitness_center',
      targetWeight: '9',
      equipment: 'smith',
      status: 'in-progress',
      sets: [
        { index: 0, reps: 10, weight: '9', status: 'complete' },
        { index: 1, reps: 0, weight: '9', status: 'in-progress' },
        { index: 2, reps: 0, weight: '9', status: 'not-started' }
      ]
    },
    {
      id: 2,
      label: 'Row, Spider',
      muscleGroup: 'back',
      icon: 'fitness_center',
      targetWeight: '9',
      equipment: 'smith',
      status: 'complete',
      sets: [
        { index: 0, reps: 10, weight: '9', status: 'complete' },
        { index: 1, reps: 0, weight: '9', status: 'in-progress' },
        { index: 2, reps: 0, weight: '9', status: 'not-started' }
      ]
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onExerciseSelect(event) {
    const selectedItem = this.exercises.find((exercise) => {
      return exercise.id === event.option.value;
    });

    this.router.navigate(['workout', selectedItem.id]);

    console.log(selectedItem);
  }
}
