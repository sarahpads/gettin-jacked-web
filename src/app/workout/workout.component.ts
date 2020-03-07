import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  public data;

  constructor(
    private store: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.data = this.store.collection('exercises').valueChanges();
  }

}
