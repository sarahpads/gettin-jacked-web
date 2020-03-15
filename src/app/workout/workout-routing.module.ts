import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { WorkoutComponent } from './workout.component';
import { SetComponent } from './set/set.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectUnauthorizedTo(['login'])
    },
    component: WorkoutComponent
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
