import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { RisksSymptomsRoutingModule } from './risks-symptoms-routing.module';
import { RisksSymptomsComponent } from './views/risks-symptoms/risks-symptoms.component';
import { RisksSymptomsTitleComponent } from './components/risks-symptoms-title/risks-symptoms-title.component';
import { ProstateCancerKnowledgeComponent } from './components/prostate-cancer-knowledge/prostate-cancer-knowledge.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { RiskFactorsHomeComponent } from './components/risk-factors/risk-factors-home/risk-factors-home.component';
import { RaceComponent } from './components/risk-factors/race/race.component';
import { AgeComponent } from './components/risk-factors/age/age.component';
import { FamilyHistoryComponent } from './components/risk-factors/family-history/family-history.component';
import { AmIAtRiskComponent } from './components/am-i-at-risk/am-i-at-risk.component';
import { LearnSymptomsComponent } from './components/learn-symptoms/learn-symptoms.component';
import { SymptomsNoneComponent } from './components/learn-symptoms/symptoms-none/symptoms-none.component';
import { SymptomsOtherComponent } from './components/learn-symptoms/symptoms-other/symptoms-other.component';
import { SymptomsCommonComponent } from './components/learn-symptoms/symptoms-common/symptoms-common.component';
import { WhatToDoComponent } from './components/learn-symptoms/what-to-do/what-to-do.component';
import { RiskSymptomsPreferencesComponent } from './components/risk-symptoms-preferences/risk-symptoms-preferences.component';
import { RisksSymptomsSummaryComponent } from './components/risks-symptoms-summary/risks-symptoms-summary.component';
import { RisksSymptomsCreditsComponent } from './components/risks-symptoms-credits/risks-symptoms-credits.component';

@NgModule({
  declarations: [
    RisksSymptomsTitleComponent,
    RisksSymptomsComponent,
    ProstateCancerKnowledgeComponent,
    RiskFactorsComponent,
    RiskFactorsHomeComponent,
    RaceComponent,
    AgeComponent,
    FamilyHistoryComponent,
    AmIAtRiskComponent,
    LearnSymptomsComponent,
    SymptomsNoneComponent,
    SymptomsOtherComponent,
    SymptomsCommonComponent,
    WhatToDoComponent,
    RiskSymptomsPreferencesComponent,
    RisksSymptomsSummaryComponent,
    RisksSymptomsCreditsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RisksSymptomsRoutingModule
  ],
  exports: [
    RisksSymptomsComponent
  ]
})
export class RisksSymptomsModule { }
