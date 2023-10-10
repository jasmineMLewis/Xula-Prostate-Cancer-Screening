import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousNextButtonsComponent } from './components/previous-next-buttons/previous-next-buttons.component';
import { FeatureCreditsComponent } from './components/feature-credits/feature-credits.component';


@NgModule({
  declarations: [
    PreviousNextButtonsComponent,
    FeatureCreditsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviousNextButtonsComponent,
    FeatureCreditsComponent
  ]
})
export class SharedModule { }
