import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnsModuleRoutingModule } from './turns-module-routing.module';
import { TurnsModuleComponent } from './turns-module.component';


@NgModule({
  declarations: [
    TurnsModuleComponent
  ],
  imports: [
    CommonModule,
    TurnsModuleRoutingModule
  ]
})
export class TurnsModuleModule { }
