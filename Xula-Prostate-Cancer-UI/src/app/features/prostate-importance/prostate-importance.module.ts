import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProstateImportanceRoutingModule } from './prostate-importance-routing.module';
import { ProstateImportanceComponent } from './views/prostate-importance/prostate-importance.component';
import { ProstateImportanceHomeComponent } from './components/prostate-importance-home/prostate-importance-home.component';
import { WhatIsProstateComponent } from './components/what-is-prostate/what-is-prostate.component';
import { CommonProblemsComponent } from './components/common-problems/common-problems.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { CommonProblemsHomeComponent } from './components/common-problems/common-problems-home/common-problems-home.component';
import { EnlargedProstateComponent } from './components/common-problems/enlarged-prostate/enlarged-prostate.component';
import { InflammationComponent } from './components/common-problems/inflammation/inflammation.component';
import { TumorsCancerComponent } from './components/common-problems/tumors-cancer/tumors-cancer.component';
import { UrineRelatedComponent } from './components/symptoms/urine-related/urine-related.component';
import { CommonSymptomsComponent } from './components/symptoms/common-symptoms/common-symptoms.component';
import { DoctorVisitComponent } from './components/doctor-visit/doctor-visit.component';
import { ProstateExamsComponent } from './components/prostate-exams/prostate-exams.component';
import { ProstateExamsHomeComponent } from './components/prostate-exams/prostate-exams-home/prostate-exams-home.component';
import { DitigalRectalExamComponent } from './components/prostate-exams/ditigal-rectal-exam/ditigal-rectal-exam.component';
import { ProstateSpecificAntigenComponent } from './components/prostate-exams/prostate-specific-antigen/prostate-specific-antigen.component';
import { ScreeningForYouComponent } from './components/screening-for-you/screening-for-you.component';
import { ProstateImportanceSummaryComponent } from './components/prostate-importance-summary/prostate-importance-summary.component';
import { ProstateImportanceCreditsComponent } from './components/prostate-importance-credits/prostate-importance-credits.component';

@NgModule({
  declarations: [
    ProstateImportanceComponent, 
    ProstateImportanceHomeComponent, 
    WhatIsProstateComponent, 
    CommonProblemsComponent, 
    SymptomsComponent, 
    CommonProblemsHomeComponent, 
    EnlargedProstateComponent, 
    InflammationComponent, 
    TumorsCancerComponent, 
    UrineRelatedComponent, 
    CommonSymptomsComponent, 
    DoctorVisitComponent,
    ProstateExamsComponent,
    ProstateExamsHomeComponent,
    DitigalRectalExamComponent,
    ProstateSpecificAntigenComponent,
    ScreeningForYouComponent,
    ProstateImportanceSummaryComponent,
    ProstateImportanceCreditsComponent
    ],
  imports: [
    CommonModule,
    ProstateImportanceRoutingModule
  ],
  exports: [
    ProstateImportanceComponent
  ]
})
export class ProstateImportanceModule { }
