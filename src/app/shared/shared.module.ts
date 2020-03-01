import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
  declarations: [UnitPipe],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    UnitPipe
  ]
})
export class SharedModule { }
