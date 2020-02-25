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
import { LayoutModule } from '../shared/layout/layout.module';

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
    LayoutModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
