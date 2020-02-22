import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumeComponent } from './consume.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumeRoutingModule { }
