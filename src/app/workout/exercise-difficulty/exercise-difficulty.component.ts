import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-exercise-difficulty',
  templateUrl: './exercise-difficulty.component.html',
  styleUrls: ['./exercise-difficulty.component.scss']
})
export class ExerciseDifficultyComponent implements OnChanges {
  @Input() difficulty = 0;

  public icon;
  public status;
  public modifier;

  constructor() { }

  ngOnChanges(changes): void {
    if (changes.difficulty && changes.difficulty.currentValue !== 'undefined') {
      this.setDifficulty(changes.difficulty.currentValue);
    }
  }

  private setDifficulty(difficulty: number) {
    switch (difficulty) {
      case -1:
        this.icon = 'arrow_downward';
        this.status = 'Easier than last time';
        this.modifier = '-easier';
        break;

      case 1:
        this.icon = 'arrow_upward';
        this.status = 'Harder than last time';
        this.modifier = '-harder';
        break;

      case 0:
      default:
        this.icon = 'remove';
        this.status = 'The same as last time'
        this.modifier = '-same';
        break;
    }
  }

}
