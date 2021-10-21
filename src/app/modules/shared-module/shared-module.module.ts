import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from 'src/app/componentes/cards/cards.component';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent
  ]
})
export class SharedModuleModule { }
