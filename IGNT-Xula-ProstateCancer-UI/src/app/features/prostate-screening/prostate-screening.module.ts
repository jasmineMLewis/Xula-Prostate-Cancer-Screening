import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProstateScreeningRoutingModule } from './prostate-screening-routing.module';
import { ProstateScreeningComponent } from './views/prostate-screening/prostate-screening.component';
import { ProstateScreeningHomeComponent } from './components/prostate-screening-home/prostate-screening-home.component';
import { CancerScreeningComponent } from './components/screening/cancer-screening/cancer-screening.component';
import { ScreeningTestComponent } from './components/screening/screening-test/screening-test.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { ScreeningForCancerComponent } from './components/screening/screening-for-cancer/screening-for-cancer.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { BestChoiceComponent } from './components/choice/best-choice/best-choice.component';
import { SharedDecisionMakingComponent } from './components/choice/shared-decision-making/shared-decision-making.component';
import { StepsInvolvedComponent } from './components/steps-involved/steps-involved.component';
import { StepsHomeComponent } from './components/steps-involved/steps-home/steps-home.component';
import { StepOneComponent } from './components/steps-involved/step-one/step-one.component';
import { GetTheResultsComponent } from './components/steps-involved/step-two/get-the-results/get-the-results.component';
import { AccuracyPsaTestComponent } from './components/steps-involved/step-two/accuracy-psa-test/accuracy-psa-test.component';
import { ExamplePsaTestComponent } from './components/steps-involved/step-two/example-psa-test/example-psa-test.component';
import { DiscussingResultsComponent } from './components/steps-involved/step-three/discussing-results/discussing-results.component';
import { AbnormalConditionsComponent } from './components/steps-involved/step-three/abnormal-conditions/abnormal-conditions.component';
import { AbnormalUrologistComponent } from './components/steps-involved/step-three/abnormal-urologist/abnormal-urologist.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ScreeningForYouComponent } from './components/screening-for-you/screening-for-you.component';
import { ProstateScreeningSummaryComponent } from './components/prostate-screening-summary/prostate-screening-summary.component';
import { ProstateScreeningCreditsComponent } from './components/prostate-screening-credits/prostate-screening-credits.component';


@NgModule({
  declarations: [
    ProstateScreeningComponent,
    ProstateScreeningHomeComponent,
    CancerScreeningComponent,
    ScreeningTestComponent,
    ScreeningComponent,
    ScreeningForCancerComponent,
    RecommendationsComponent,
    ChoiceComponent,
    BestChoiceComponent,
    StepsInvolvedComponent,
    StepsHomeComponent,
    StepOneComponent,
    GetTheResultsComponent,
    AccuracyPsaTestComponent,
    ExamplePsaTestComponent,
    DiscussingResultsComponent,
    AbnormalConditionsComponent,
    AbnormalUrologistComponent,
    StoriesComponent,
    ScreeningForYouComponent,
    ProstateScreeningSummaryComponent,
    ProstateScreeningCreditsComponent,
    SharedDecisionMakingComponent
  ],
  imports: [
    CommonModule,
    ProstateScreeningRoutingModule
  ],
  exports: [
    ProstateScreeningComponent
  ]
})
export class ProstateScreeningModule { }
