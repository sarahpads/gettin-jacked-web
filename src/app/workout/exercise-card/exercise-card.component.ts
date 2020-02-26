import { Component, OnInit, Input } from '@angular/core';

import { exerciseCardAnimations } from './exercise-card-animations';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  animations: [exerciseCardAnimations.bodyExpansion]
})
export class ExerciseCardComponent implements OnInit {
  @Input() public exercise;

  public isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onExpandClick() {
    this.isExpanded = !this.isExpanded;
  }
}
