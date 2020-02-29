import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdcIconModule,
  MdcListModule,
  MdcTopAppBarModule
} from '@angular-mdc/web';

import { ExerciseListRoutingModule } from './exercise-list-routing.module';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ExerciseListComponent, ExerciseComponent],
  imports: [
    CommonModule,
    MdcIconModule,
    MdcListModule,
    MdcTopAppBarModule,
    SharedModule,
    ExerciseListRoutingModule
  ]
})
export class ExerciseListModule { }
