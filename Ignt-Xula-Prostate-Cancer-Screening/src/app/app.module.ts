import { DiagnosisTreatmentModule } from './features/diagnosis-treatment/diagnosis-treatment.module';
import { DiagnosisTreatmentComponent } from './features/diagnosis-treatment/views/diagnosis-treatment/diagnosis-treatment.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule} from './features/home/home.module';
import { ProstateImportanceModule } from './features/prostate-importance/prostate-importance.module';
import { RisksSymptomsModule } from './features/risks-symptoms/risks-symptoms.module';
import { ProstateScreeningModule } from './features/prostate-screening/prostate-screening.module';
import { BestChoiceModule } from './features/best-choice/best-choice.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    // Angular modules
    BrowserModule,

    // "Singleton" modules (not feature modules)
    LayoutModule,

    // Feature modules
    HomeModule,
    ProstateImportanceModule,
    RisksSymptomsModule,
    ProstateScreeningModule,
    DiagnosisTreatmentModule,
    BestChoiceModule,
    
    // App routing - should be the last import!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
