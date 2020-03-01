import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcButtonModule } from '@angular-mdc/web';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MdcButtonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
