import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  public exercises = {
    C: [
      {
        title: 'Cable Cross',
        muscleGroup: 'chest',
        favourite: false
      },
      {
        title: 'Curl, Cambered Bar',
        muscleGroup: 'arms',
        favourite: false
      }
    ],
    F: [
      {
        title: 'Fly, Spider',
        muscleGroup: 'back',
        favourite: false
      },
      {
        title: 'Fly, Rear Delt',
        muscleGroup: 'back',
        favourite: false
      },
      {
        title: 'Fly, Upper Cable',
        muscleGroup: 'chest',
        favourite: false
      },
      {
        title: 'Fly, Lower Cable',
        muscleGroup: 'chest',
        favourite: false
      },
    ],
    K: [
      {
        title: 'Kickback, Cable',
        muscleGroup: 'legs',
        favourite: true
      },
    ],
    M: [
      {
        title: 'Mercy 30s',
        muscleGroup: 'arms',
        favourite: false
      },
    ],
    P: [
      {
        title: 'Press, Military',
        muscleGroup: 'shoulder',
        favourite: true
      },
      {
        title: 'Press, Chest',
        muscleGroup: 'chest',
        favourite: true
      },
      {
        title: 'Push ups',
        muscleGroup: 'chest',
        favourite: false
      },
      {
        title: 'Press, Leg',
        muscleGroup: 'legs',
        favourite: true
      },
      {
        title: 'Pull Up',
        muscleGroup: 'back',
        favourite: false
      },
      {
        title: 'Press, Single Arm Shoulder',
        muscleGroup: 'shoulder',
        favourite: false
      },

      {
        title: 'Press, Center',
        muscleGroup: 'chest',
        favourite: false
      },
    ],
    R: [
      {
        title: 'Row, Seated Cable',
        muscleGroup: 'back',
        favourite: true
      },
      {
        title: 'Raise, Lateral',
        muscleGroup: 'shoulder',
        favourite: false
      },
      {
        title: 'Raise, Front',
        muscleGroup: 'shoulder',
        favourite: false
      },
    ]
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onExerciseSelect(event) {
    this.router.navigate(['./exercises', 1]);
  }
}
