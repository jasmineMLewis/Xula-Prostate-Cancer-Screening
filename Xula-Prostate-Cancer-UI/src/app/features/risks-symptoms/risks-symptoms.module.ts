import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisksSymptomsRoutingModule } from './risks-symptoms-routing.module';
import { RisksSymptomsComponent } from './views/risks-symptoms/risks-symptoms.component';
import { RisksSymptomsHomeComponent } from './components/risks-symptoms-home/risks-symptoms-home.component';
import { ProstateCancerKnowledgeComponent } from './components/prostate-cancer-knowledge/prostate-cancer-knowledge.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { RiskFactorsHomeComponent } from './components/risk-factors/risk-factors-home/risk-factors-home.component';
import { AgeComponent } from './components/risk-factors/age/age.component';
import { FamilyHistoryComponent } from './components/risk-factors/family-history/family-history.component';
import { RaceComponent } from './components/risk-factors/race/race.component';
import { RisksSymptomsCreditsComponent } from './components/risks-symptoms-credits/risks-symptoms-credits.component';
import { RisksSymptomsSummaryComponent } from './components/risks-symptoms-summary/risks-symptoms-summary.component';
import { ScreeningForYouComponent } from './components/screening-for-you/screening-for-you.component';
import { AmIAtRiskComponent } from './components/am-i-at-risk/am-i-at-risk.component';
import { LearnSymptomsComponent } from './components/learn-symptoms/learn-symptoms.component';
import { SymptomsNoneComponent } from './components/learn-symptoms/symptoms-none/symptoms-none.component';
import { SymptomsSometimesComponent } from './components/learn-symptoms/symptoms-sometimes/symptoms-sometimes.component';
import { SymptomsOftenComponent } from './components/learn-symptoms/symptoms-often/symptoms-often.component';
import { SymptomsAnyComponent } from './components/learn-symptoms/symptoms-any/symptoms-any.component';



@NgModule({
  declarations: [
    RisksSymptomsComponent,
    RisksSymptomsHomeComponent,
    ProstateCancerKnowledgeComponent,
    RiskFactorsComponent,
    RiskFactorsHomeComponent,
    AgeComponent,
    FamilyHistoryComponent,
    RaceComponent,
    RisksSymptomsCreditsComponent,
    RisksSymptomsSummaryComponent,
    ScreeningForYouComponent,
    AmIAtRiskComponent,
    LearnSymptomsComponent,
    SymptomsNoneComponent,
    SymptomsSometimesComponent,
    SymptomsOftenComponent,
    SymptomsAnyComponent
  ],
  imports: [
    CommonModule,
    RisksSymptomsRoutingModule
  ],
  exports: [
    RisksSymptomsComponent
  ]
})
export class RisksSymptomsModule { }
