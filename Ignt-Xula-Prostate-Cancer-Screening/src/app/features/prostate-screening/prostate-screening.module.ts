import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ProstateScreeningRoutingModule } from './prostate-screening-routing.module';
import { ProstateScreeningComponent } from './views/prostate-screening/prostate-screening.component';
import { ProstateScreeningTitleComponent } from './components/prostate-screening-title/prostate-screening-title.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { CancerScreeningComponent } from './components/screening/cancer-screening/cancer-screening.component';
import { ScreeningForCancerComponent } from './components/screening/screening-for-cancer/screening-for-cancer.component';
import { ScreeningTestComponent } from './components/screening/screening-test/screening-test.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { BestChoiceComponent } from './components/choices/best-choice/best-choice.component';
import { SharedDecisionMakingComponent } from './components/choices/shared-decision-making/shared-decision-making.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepsHomeComponent } from './components/steps/steps-home/steps-home.component';
import { StepOneComponent } from './components/steps/step-one/step-one.component';
import { GetTheResultsComponent } from './components/steps/step-two/get-the-results/get-the-results.component';
import { ExamplePsaTestComponent } from './components/steps/step-two/example-psa-test/example-psa-test.component';
import { AccuracyPsaTestComponent } from './components/steps/step-two/accuracy-psa-test/accuracy-psa-test.component';
import { DiscussingResultsComponent } from './components/steps/step-three/discussing-results/discussing-results.component';
import { AbnormalResultsComponent } from './components/steps/step-three/abnormal-results/abnormal-results.component';
import { ReferralToUrologistComponent } from './components/steps/step-three/referral-to-urologist/referral-to-urologist.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ProstateScreeningPreferencesComponent } from './components/prostate-screening-preferences/prostate-screening-preferences.component';
import { ProstateScreeningSummaryComponent } from './components/prostate-screening-summary/prostate-screening-summary.component';
import { ProstateScreeningCreditsComponent } from './components/prostate-screening-credits/prostate-screening-credits.component';

@NgModule({
  declarations: [
    ProstateScreeningComponent,
    ProstateScreeningTitleComponent,
    ScreeningComponent,
    CancerScreeningComponent,
    ScreeningForCancerComponent,
    ScreeningTestComponent,
    StudiesComponent,
    ChoicesComponent,
    BestChoiceComponent,
    SharedDecisionMakingComponent,
    StepsComponent,
    StepsHomeComponent,
    StepOneComponent,
    GetTheResultsComponent,
    ExamplePsaTestComponent,
    AccuracyPsaTestComponent,
    DiscussingResultsComponent,
    ReferralToUrologistComponent,
    StoriesComponent,
    ProstateScreeningPreferencesComponent,
    ProstateScreeningSummaryComponent,
    ProstateScreeningCreditsComponent,
    AbnormalResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProstateScreeningRoutingModule
  ],
 exports: [
  ProstateScreeningComponent
 ]
})
export class ProstateScreeningModule { }
