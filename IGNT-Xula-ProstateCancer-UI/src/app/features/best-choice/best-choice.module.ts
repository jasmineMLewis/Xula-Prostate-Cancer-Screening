import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestChoiceRoutingModule } from './best-choice-routing.module';
import { BestChoiceComponent } from './views/best-choice/best-choice.component';
import { BestChoiceHomeComponent } from './components/best-choice-home/best-choice-home.component';
import { BestChoiceSummaryComponent } from './components/best-choice-summary/best-choice-summary.component';
import { BestChoiceCreditsComponent } from './components/best-choice-credits/best-choice-credits.component';
import { ScreeningForYouComponent } from './components/screening-for-you/screening-for-you.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { ChoiceHomeComponent } from './components/choice/choice-home/choice-home.component';
import { WatchfulWaitingComponent } from './components/choice/watchful-waiting/watchful-waiting.component';
import { ProstateSurgeryComponent } from './components/choice/prostate-surgery/prostate-surgery.component';
import { FactorsComponent } from './components/factors/factors.component';
import { DiscussionQuestionsComponent } from './components/discussion-questions/discussion-questions.component';
import { ScreeningQuestionsComponent } from './components/screening-questions/screening-questions.component';
import { GettingScreenedComponent } from './components/screening-questions/getting-screened/getting-screened.component';
import { NotGettingScreenedComponent } from './components/screening-questions/not-getting-screened/not-getting-screened.component';


@NgModule({
  declarations: [
    BestChoiceComponent,
    BestChoiceHomeComponent,
    BestChoiceSummaryComponent,
    BestChoiceCreditsComponent,
    ScreeningForYouComponent,
    ChoiceComponent,
    ChoiceHomeComponent,
    WatchfulWaitingComponent,
    ProstateSurgeryComponent,
    FactorsComponent,
    DiscussionQuestionsComponent,
    ScreeningQuestionsComponent,
    GettingScreenedComponent,
    NotGettingScreenedComponent
  ],
  imports: [
    CommonModule,
    BestChoiceRoutingModule
  ],
  exports: [
    BestChoiceComponent
  ]
})
export class BestChoiceModule { }
