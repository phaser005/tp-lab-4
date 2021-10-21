import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModuleComponent } from './register-module.component';

const routes: Routes = [{ path: '', component: RegisterModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterModuleRoutingModule { }
