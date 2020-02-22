import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavModule } from './side-nav/side-nav.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SideNavModule
  ],
  exports: [
    HeaderModule,
    SideNavModule
  ]
})
export class SharedModule { }
