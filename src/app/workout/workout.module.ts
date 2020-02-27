import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdcChipsModule,
  MdcListModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcDialogModule,
  MdcTopAppBarModule,
  MdcMenuModule,
  MdcSelectModule,
  MdcTypographyModule,
  MdcTextFieldModule,
  MdcFabModule,
  MdcCardModule,
  MdcFormFieldModule,
  MdcCheckboxModule
} from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { SetComponent } from './set/set.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
  declarations: [WorkoutComponent, ExerciseComponent, SetComponent, ExerciseCardComponent],
  imports: [
    CommonModule,
    MdcChipsModule,
    MdcCardModule,
    MdcListModule,
    MdcIconModule,
    MdcDialogModule,
    MdcTopAppBarModule,
    MdcButtonModule,
    MdcIconButtonModule,
    MdcMenuModule,
    MdcSelectModule,
    MdcTypographyModule,
    MdcTextFieldModule,
    MdcFabModule,
    MdcFormFieldModule,
    MdcCheckboxModule,
    LayoutModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
