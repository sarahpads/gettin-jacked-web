import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
      targetWeight: 9,
      targetReps: 10,
      equipment: 'smith',
      status: 'in-progress',
      difficulty: 1,
      notes: 'Height 13',
      settings: 'Height 13',
      sets: [
        { index: 0, reps: 10, weight: 9, status: 'complete', borderStyle: 'dashed' },
        { index: 1, reps: 15, weight: 9, status: 'in-progress' },
        { index: 2, reps: 15, weight: 9, status: 'not-started' },
        { index: 1, reps: 15, weight: 9, status: 'not-started' },
        { index: 1, reps: 15, weight: 9, status: 'not-started' },
        { index: 1, reps: 15, weight: 9, status: 'not-started' }
      ]
    },
    {
      id: 2,
      label: 'Row, Spider',
      muscleGroup: 'back',
      targetWeight: 30,
      targetReps: 10,
      equipment: 'dumbbell',
      status: 'complete',
      difficulty: -1,
      sets: [
        { index: 0, reps: 10, weight: 9, status: 'complete' },
        { index: 1, reps: 0, weight: 9, status: 'in-progress' },
        { index: 2, reps: 0, weight: 9, status: 'not-started' }
      ]
    },
    {
      id: 3,
      label: 'Press, Military',
      muscleGroup: 'shoulder',
      targetWeight: 35,
      equipment: 'barbell',
      status: 'not-started',
      difficulty: 0,
      sets: [
        { index: 0, reps: 0, weight: 9, status: 'in-progress' },
        { index: 1, reps: 0, weight: 9, status: 'not-started' },
        { index: 2, reps: 0, weight: 9, status: 'not-started' }
      ]
    }
  ];
  public data;

  constructor(
    private store: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.data = this.store.collection('exercises').valueChanges();
  }
}
