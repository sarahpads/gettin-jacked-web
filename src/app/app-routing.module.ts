import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'consume',
    loadChildren: () => import('./consume/consume.module').then((m) => m.ConsumeModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },

  {
    path: 'workout',
    loadChildren: () => import('./workout/workout.module').then((m) => m.WorkoutModule)
  },

  {
    path: 'exercises',
    loadChildren: () => import('./exercise-list/exercise-list.module').then((m) => m.ExerciseListModule)
  },

  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
