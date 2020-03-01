import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { exerciseCardAnimations } from './exercise-card-animations';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  animations: [exerciseCardAnimations.bodyExpansion]
})
export class ExerciseCardComponent implements OnInit {
  @Input() public exercise;
  @ViewChild('cardMenu') public menu;

  public isExpanded = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onExpandClick() {
    this.isExpanded = !this.isExpanded;
  }

  public onSetSelect(event) {
    this.router.navigate(['workout', this.exercise.id, 'sets', event.option.value]);
  }
}
