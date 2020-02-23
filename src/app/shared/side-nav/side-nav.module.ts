import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdcDrawerModule } from '@angular-mdc/web';
import { MdcListModule } from '@angular-mdc/web';
import { MdcIconModule } from '@angular-mdc/web';

import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MdcIconModule,
    MdcDrawerModule,
    MdcListModule,
    RouterModule
  ],
  exports: [SideNavComponent]
})
export class SideNavModule { }
