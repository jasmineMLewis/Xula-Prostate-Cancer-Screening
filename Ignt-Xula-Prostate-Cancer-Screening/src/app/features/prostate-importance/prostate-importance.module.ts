import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ProstateImportanceRoutingModule } from './prostate-importance-routing.module';
import { ProstateImportanceTitleComponent } from './components/prostate-importance-title/prostate-importance-title.component';
import { ProstateImportanceComponent } from './views/prostate-importance/prostate-importance.component';
import { WhatIsProstateComponent } from './components/what-is-prostate/what-is-prostate.component';
import { ProstateImportanceSummaryComponent } from './components/prostate-importance-summary/prostate-importance-summary.component';
import { ProstateImportanceCreditsComponent } from './components/prostate-importance-credits/prostate-importance-credits.component';
import { DoctorVisitComponent } from './components/doctor-visit/doctor-visit.component';
import { ProstateImportancePreferencesComponent } from './components/prostate-importance-preferences/prostate-importance-preferences.component';
import { CommonProblemsComponent } from './components/common-problems/common-problems.component';
import { CommonProblemsHomeComponent } from './components/common-problems/common-problems-home/common-problems-home.component';
import { EnlargedProstateComponent } from './components/common-problems/enlarged-prostate/enlarged-prostate.component';
import { InflammationComponent } from './components/common-problems/inflammation/inflammation.component';
import { TumorsCancerComponent } from './components/common-problems/tumors-cancer/tumors-cancer.component';
import { ProstateExamsComponent } from './components/prostate-exams/prostate-exams.component';
import { DigitalRectalExamComponent } from './components/prostate-exams/digital-rectal-exam/digital-rectal-exam.component';
import { ProstateExamsHomeComponent } from './components/prostate-exams/prostate-exams-home/prostate-exams-home.component';
import { ProstateSpecificAntigenComponent } from './components/prostate-exams/prostate-specific-antigen/prostate-specific-antigen.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { CommonSymptomsComponent } from './components/symptoms/common-symptoms/common-symptoms.component';
import { UrineRelatedComponent } from './components/symptoms/urine-related/urine-related.component';

@NgModule({
  declarations: [
    ProstateImportanceTitleComponent,
    ProstateImportanceComponent,
    WhatIsProstateComponent,
    ProstateImportanceSummaryComponent,
    ProstateImportanceCreditsComponent,
    DoctorVisitComponent,
    ProstateImportancePreferencesComponent,
    CommonProblemsComponent,
    CommonProblemsHomeComponent,
    EnlargedProstateComponent,
    InflammationComponent,
    TumorsCancerComponent,
    ProstateExamsComponent,
    DigitalRectalExamComponent,
    ProstateExamsHomeComponent,
    ProstateSpecificAntigenComponent,
    SymptomsComponent,
    CommonSymptomsComponent,
    UrineRelatedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProstateImportanceRoutingModule
  ],
  exports: [
    ProstateImportanceComponent
  ]
})
export class ProstateImportanceModule { }
