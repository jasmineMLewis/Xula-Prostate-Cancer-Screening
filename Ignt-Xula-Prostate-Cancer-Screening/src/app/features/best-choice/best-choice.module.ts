import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { BestChoiceRoutingModule } from './best-choice-routing.module';
import { BestChoiceComponent } from './views/best-choice/best-choice.component';
import { BestChoiceTitleComponent } from './components/best-choice-title/best-choice-title.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { ScreeningForYouComponent } from './components/choices/screening-for-you/screening-for-you.component';
import { WatchfulWaitingComponent } from './components/choices/watchful-waiting/watchful-waiting.component';
import { ProstateSurgeryComponent } from './components/choices/prostate-surgery/prostate-surgery.component';
import { BestChoicePreferencesComponent } from './components/best-choice-preferences/best-choice-preferences.component';
import { FactorsComponent } from './components/factors/factors.component';
import { DiscussionQuestionsComponent } from './components/discussion-questions/discussion-questions.component';
import { DecisionComponent } from './components/decision/decision.component';
import { GettingScreenedComponent } from './components/decision/getting-screened/getting-screened.component';
import { NotGettingScreenedComponent } from './components/decision/not-getting-screened/not-getting-screened.component';
import { BestChoiceSummaryComponent } from './components/best-choice-summary/best-choice-summary.component';
import { BestChoiceCreditsComponent } from './components/best-choice-credits/best-choice-credits.component';

@NgModule({
  declarations: [
    BestChoiceComponent,
    BestChoiceTitleComponent,
    ChoicesComponent,
    ScreeningForYouComponent,
    WatchfulWaitingComponent,
    ProstateSurgeryComponent,
    BestChoicePreferencesComponent,
    FactorsComponent,
    DiscussionQuestionsComponent,
    DecisionComponent,
    GettingScreenedComponent,
    NotGettingScreenedComponent,
    BestChoiceSummaryComponent,
    BestChoiceCreditsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BestChoiceRoutingModule
  ],
  exports: [
    BestChoiceComponent
  ]
})
export class BestChoiceModule { }
