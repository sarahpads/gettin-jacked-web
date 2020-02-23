import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcIconModule } from '@angular-mdc/web';
import { MdcTopAppBarModule } from '@angular-mdc/web';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MdcIconModule,
    MdcTopAppBarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
