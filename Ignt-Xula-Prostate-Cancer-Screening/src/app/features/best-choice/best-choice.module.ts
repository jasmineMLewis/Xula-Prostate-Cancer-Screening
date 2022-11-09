import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestChoiceRoutingModule } from './best-choice-routing.module';
import { BestChoiceComponent } from './views/best-choice/best-choice.component';
import { BestChoiceHomeComponent } from './components/best-choice-home/best-choice-home.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { ScreeningForYouComponent } from './components/choice/screening-for-you/screening-for-you.component';
import { WatchfulWaitingComponent } from './components/choice/watchful-waiting/watchful-waiting.component';
import { ProstateSurgeryComponent } from './components/choice/prostate-surgery/prostate-surgery.component';
import { BestChoiceQuestionnaireComponent } from './components/best-choice-questionnaire/best-choice-questionnaire.component';
import { FactorsComponent } from './components/factors/factors.component';
import { DiscussionQuestionsComponent } from './components/discussion-questions/discussion-questions.component';
import { ScreeningQuestionsComponent } from './components/screening-questions/screening-questions.component';
import { GettingScreenedComponent } from './components/screening-questions/getting-screened/getting-screened.component';
import { NotGettingScreenedComponent } from './components/screening-questions/not-getting-screened/not-getting-screened.component';
import { BestChoiceSummaryComponent } from './components/best-choice-summary/best-choice-summary.component';
import { BestChoiceCreditsComponent } from './components/best-choice-credits/best-choice-credits.component';


@NgModule({
  declarations: [
    BestChoiceComponent,
    BestChoiceHomeComponent,
    ChoiceComponent,
    ScreeningForYouComponent,
    WatchfulWaitingComponent,
    ProstateSurgeryComponent,
    BestChoiceQuestionnaireComponent,
    FactorsComponent,
    DiscussionQuestionsComponent,
    ScreeningQuestionsComponent,
    GettingScreenedComponent,
    NotGettingScreenedComponent,
    BestChoiceSummaryComponent,
    BestChoiceCreditsComponent
    
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
