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
  MdcCardModule
} from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SetComponent } from './set/set.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
  declarations: [WorkoutComponent, ExerciseComponent, SetComponent],
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
    LayoutModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
