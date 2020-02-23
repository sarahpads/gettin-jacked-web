import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

export interface DialogData {
  exercise: any;
}

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExerciseComponent implements OnInit {
  public exercise;

  constructor(
    public dialogRef: MdcDialogRef<ExerciseComponent>,
    @Inject(MDC_DIALOG_DATA) public data: DialogData
  ) {
    this.exercise = data.exercise;
  }

  ngOnInit(): void {
  }

  public onCloseClick() {
    this.dialogRef.close();
  }

  public onMenuSelect() {}

  public onAddSetClick() {
    this.exercise.sets.push({ target: 0, weight: 0 });
  }

}
