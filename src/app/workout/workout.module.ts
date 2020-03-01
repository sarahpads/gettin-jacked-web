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
  MdcCheckboxModule,
  MdcRadioModule,
  MdcSwitchModule
} from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { SetComponent } from './set/set.component';
import { SharedModule } from '../shared/shared.module';
import { ExerciseDifficultyComponent } from './exercise-difficulty/exercise-difficulty.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { SetFlagComponent } from './set-flag/set-flag.component';

@NgModule({
  declarations: [WorkoutComponent, SetComponent, ExerciseDifficultyComponent, ExerciseCardComponent, SetFlagComponent],
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
    MdcRadioModule,
    MdcSwitchModule,
    SharedModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
