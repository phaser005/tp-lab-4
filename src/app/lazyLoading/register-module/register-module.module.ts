import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterModuleRoutingModule } from './register-module-routing.module';
import { RegisterModuleComponent } from './register-module.component';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';


@NgModule({
  declarations: [
    RegisterModuleComponent
  ],
  imports: [
    CommonModule,
    RegisterModuleRoutingModule,
    SharedModuleModule
  ]
})
export class RegisterModuleModule { }
