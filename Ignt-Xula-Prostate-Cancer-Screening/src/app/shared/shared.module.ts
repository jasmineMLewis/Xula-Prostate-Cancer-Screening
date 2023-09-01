import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousNextButtonsComponent } from './components/previous-next-buttons/previous-next-buttons.component';


@NgModule({
  declarations: [
    PreviousNextButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviousNextButtonsComponent
  ]
})
export class SharedModule { }
