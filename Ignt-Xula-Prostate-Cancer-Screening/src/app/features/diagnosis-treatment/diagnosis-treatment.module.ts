import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosisTreatmentRoutingModule } from './diagnosis-treatment-routing.module';
import { DiagnosisTreatmentComponent } from './views/diagnosis-treatment/diagnosis-treatment.component';
import { DiagnosisTreatmentHomeComponent } from './components/diagnosis-treatment-home/diagnosis-treatment-home.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { AdditionalTestsComponent } from './components/additional-tests/additional-tests.component';
import { AdditionalTestsHomeComponent } from './components/additional-tests/additional-tests-home/additional-tests-home.component';
import { BiopsyComponent } from './components/additional-tests/biopsy/biopsy.component';
import { MagneticResonanceImagingComponent } from './components/additional-tests/magnetic-resonance-imaging/magnetic-resonance-imaging.component';
import { BloodUrineTestComponent } from './components/additional-tests/blood-urine-test/blood-urine-test.component';
import { TransrectalUltrasoundTestComponent } from './components/additional-tests/transrectal-ultrasound-test/transrectal-ultrasound-test.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { TreatmentNoProblemComponent } from './components/treatment/treatment-no-problem/treatment-no-problem.component';
import { TreatmentHomeComponent } from './components/treatment/treatment-home/treatment-home.component';
import { TreatmentSeriousProblemComponent } from './components/treatment/treatment-serious-problem/treatment-serious-problem.component';
import { TreatmentMayBeSomeProblemComponent } from './components/treatment/treatment-may-be-some-problem/treatment-may-be-some-problem.component';
import { DecisionComponent } from './components/decision/decision.component';
import { DecisionHomeComponent } from './components/decision/decision-home/decision-home.component';
import { WatchAndWaitComponent } from './components/decision/watch-and-wait/watch-and-wait.component';
import { ActiveTreatmentComponent } from './components/decision/active-treatment/active-treatment.component';
import { TalkToYourDoctorComponent } from './components/decision/talk-to-your-doctor/talk-to-your-doctor.component';
import { BestChoiceQuestionnaireComponent } from './components/best-choice-questionnaire/best-choice-questionnaire.component';
import { DiagnosisTreatmentSummaryComponent } from './components/diagnosis-treatment-summary/diagnosis-treatment-summary.component';
import { DiagnosisTreatmentCreditsComponent } from './components/diagnosis-treatment-credits/diagnosis-treatment-credits.component';


@NgModule({
  declarations: [
    DiagnosisTreatmentComponent,
    DiagnosisTreatmentHomeComponent,
    DiagnosisComponent,
    AdditionalTestsComponent,
    AdditionalTestsHomeComponent,
    BiopsyComponent,
    MagneticResonanceImagingComponent,
    BloodUrineTestComponent,
    TransrectalUltrasoundTestComponent,
    TreatmentComponent,
    TreatmentNoProblemComponent,
    TreatmentHomeComponent,
    TreatmentSeriousProblemComponent,
    TreatmentMayBeSomeProblemComponent,
    DecisionComponent,
    DecisionHomeComponent,
    WatchAndWaitComponent,
    ActiveTreatmentComponent,
    TalkToYourDoctorComponent,
    BestChoiceQuestionnaireComponent,
    DiagnosisTreatmentSummaryComponent,
    DiagnosisTreatmentCreditsComponent
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
