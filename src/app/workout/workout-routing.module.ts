import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutComponent } from './workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SetComponent } from './set/set.component';
// import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: WorkoutComponent,
  },

  {
    path: ':exercise/sets/:index',
    component: SetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
