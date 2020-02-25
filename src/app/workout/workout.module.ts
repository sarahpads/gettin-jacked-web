import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcTopAppBarModule } from '@angular-mdc/web';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
  declarations: [WorkoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MdcTopAppBarModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
