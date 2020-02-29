import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { exerciseCardAnimations } from './exercise-animations';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  animations: [exerciseCardAnimations.bodyExpansion]
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise;
  @ViewChild('cardMenu') public menu;

  public isExpanded = true;

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
