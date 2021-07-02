import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosisTreatmentRoutingModule } from './diagnosis-treatment-routing.module';
import { DiagnosisTreatmentComponent } from './views/diagnosis-treatment/diagnosis-treatment.component';
import { DiagnosisTreatmentHomeComponent } from './components/diagnosis-treatment-home/diagnosis-treatment-home.component';
import { DiagnosisTreatmentCreditsComponent } from './components/diagnosis-treatment-credits/diagnosis-treatment-credits.component';
import { DiagnosisTreatmentSummaryComponent } from './components/diagnosis-treatment-summary/diagnosis-treatment-summary.component';
import { ScreeningForYouComponent } from './components/screening-for-you/screening-for-you.component';
import { DiagnosisTreatmentProstateCancerComponent } from './components/diagnosis-treatment-prostate-cancer/diagnosis-treatment-prostate-cancer.component';
import { AbnormalTestsComponent } from './components/abnormal-tests/abnormal-tests.component';
import { AbnormalTestsHomeComponent } from './components/abnormal-tests/abnormal-tests-home/abnormal-tests-home.component';
import { NewBloodUrineTestComponent } from './components/abnormal-tests/new-blood-urine-test/new-blood-urine-test.component';
import { TransrectalUltrasoundTestComponent } from './components/abnormal-tests/transrectal-ultrasound-test/transrectal-ultrasound-test.component';
import { MagneticResonanceImagingComponent } from './components/abnormal-tests/magnetic-resonance-imaging/magnetic-resonance-imaging.component';
import { BiopsyComponent } from './components/abnormal-tests/biopsy/biopsy.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { TreatmentHomeComponent } from './components/treatment/treatment-home/treatment-home.component';
import { TreatmentProblemNeverComponent } from './components/treatment/treatment-problem-never/treatment-problem-never.component';
import { TreatmentProblemDoComponent } from './components/treatment/treatment-problem-do/treatment-problem-do.component';
import { TreatmentProblemMayComponent } from './components/treatment/treatment-problem-may/treatment-problem-may.component';
import { DecisionComponent } from './components/decision/decision.component';
import { DecisionHomeComponent } from './components/decision/decision-home/decision-home.component';
import { WatchAndWaitComponent } from './components/decision/watch-and-wait/watch-and-wait.component';
import { ActiveTreatmentComponent } from './components/decision/active-treatment/active-treatment.component';
import { TalkToYourDoctorComponent } from './components/decision/talk-to-your-doctor/talk-to-your-doctor.component';

@NgModule({
  declarations: [
    DiagnosisTreatmentComponent,
    DiagnosisTreatmentHomeComponent,
    DiagnosisTreatmentCreditsComponent,
    DiagnosisTreatmentSummaryComponent,
    ScreeningForYouComponent,
    DiagnosisTreatmentProstateCancerComponent,
    AbnormalTestsComponent,
    AbnormalTestsHomeComponent,
    NewBloodUrineTestComponent,
    TransrectalUltrasoundTestComponent,
    MagneticResonanceImagingComponent,
    BiopsyComponent,
    TreatmentComponent,
    TreatmentHomeComponent,
    TreatmentProblemNeverComponent,
    TreatmentProblemDoComponent,
    TreatmentProblemMayComponent,
    DecisionComponent,
    DecisionHomeComponent,
    WatchAndWaitComponent,
    ActiveTreatmentComponent,
    TalkToYourDoctorComponent
  ],
  imports: [
    CommonModule,
    DiagnosisTreatmentRoutingModule
  ], 
  exports: [
    DiagnosisTreatmentComponent
  ]
})
export class DiagnosisTreatmentModule { }
