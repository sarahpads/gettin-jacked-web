import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AuthModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
