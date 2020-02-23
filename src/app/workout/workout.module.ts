import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcListModule } from '@angular-mdc/web';
import { MdcIconModule } from '@angular-mdc/web';
import { MdcDialogModule } from '@angular-mdc/web';
import { MdcTopAppBarModule } from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [WorkoutComponent, ExerciseComponent],
  imports: [
    CommonModule,
    MdcListModule,
    MdcIconModule,
    MdcDialogModule,
    MdcTopAppBarModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
