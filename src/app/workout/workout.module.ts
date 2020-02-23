import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcListModule } from '@angular-mdc/web';
import { MdcIconModule } from '@angular-mdc/web';
import { MdcDialogModule } from '@angular-mdc/web';
import { MdcTopAppBarModule } from '@angular-mdc/web';
import { MdcMenuModule } from '@angular-mdc/web';
import { MdcFormFieldModule } from '@angular-mdc/web';
import { MdcSelectModule } from '@angular-mdc/web';
import { MdcTypographyModule } from '@angular-mdc/web';
import { MDCDataTableModule } from '@angular-mdc/web';
import { MdcTextFieldModule } from '@angular-mdc/web';
import { MdcFabModule } from '@angular-mdc/web';




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
    MdcMenuModule,
    MdcFormFieldModule,
    MdcSelectModule,
    MdcTypographyModule,
    MDCDataTableModule,
    MdcTextFieldModule,
    MdcFabModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
