import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdcDrawerModule,
  MdcListModule,
  MdcIconModule,
  MdcTopAppBarModule
} from '@angular-mdc/web';

import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  imports: [
    CommonModule,
    MdcDrawerModule,
    MdcListModule,
    MdcIconModule,
    MdcTopAppBarModule,
    RouterModule
  ],
  exports: [SideNavComponent, HeaderComponent]
})
export class LayoutModule { }
