import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdcListModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcDialogModule,
  MdcTopAppBarModule,
  MdcMenuModule,
  MdcSelectModule,
  MdcTypographyModule,
  MdcTextFieldModule,
  MdcFabModule
} from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SetComponent } from './set/set.component';

@NgModule({
  declarations: [WorkoutComponent, ExerciseComponent, SetComponent],
  imports: [
    CommonModule,
    MdcListModule,
    MdcIconModule,
    MdcDialogModule,
    MdcTopAppBarModule,
    MdcIconButtonModule,
    MdcMenuModule,
    MdcSelectModule,
    MdcTypographyModule,
    MdcTextFieldModule,
    MdcFabModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
