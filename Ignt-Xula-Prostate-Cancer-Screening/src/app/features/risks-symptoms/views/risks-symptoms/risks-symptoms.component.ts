import { Component, OnInit, ViewChild } from '@angular/core';
import { LearnSymptomsComponent } from '@features/risks-symptoms/components/learn-symptoms/learn-symptoms.component';
import { RiskFactorsComponent } from '@features/risks-symptoms/components/risk-factors/risk-factors.component';
import { PreviousNextButtonsComponent } from '@shared/components/previous-next-buttons/previous-next-buttons.component';

@Component({
  selector: 'risks-symptoms',
  templateUrl: './risks-symptoms.component.html',
  styleUrls: ['./risks-symptoms.component.css']
})
export class RisksSymptomsComponent implements OnInit {
  @ViewChild(PreviousNextButtonsComponent, {static: true}) compPrevNext!: PreviousNextButtonsComponent;
  
  //Components to cycle through as Vertical Sub-Tabs
  @ViewChild(RiskFactorsComponent, {static: false}) compRiskFactors!: RiskFactorsComponent;
  @ViewChild(LearnSymptomsComponent, {static: false}) compLearnSymptoms!: LearnSymptomsComponent;

  //Horizontal Tabs with Vertical Sub-Tabs 
  public readonly RISK_FACTORS = 'riskFactors';
  public readonly LEARN_SYMPTOMS = 'learnSymptoms';

  ngOnInit(): void { }

  public canMove(isNext: boolean): boolean {
    let retVal: boolean = true;

    switch(this.compPrevNext.currentMainHref) {
      case this.RISK_FACTORS: {
        retVal = this.compRiskFactors.subModuleHandler(isNext);
        break;
      }
      case this.LEARN_SYMPTOMS: {
        retVal = this.compLearnSymptoms.subModuleHandler(isNext);
        break;
      }
    }
    return retVal;
  }
}
