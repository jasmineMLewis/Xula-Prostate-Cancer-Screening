import { Component, OnInit, ViewChild } from '@angular/core';
import { AdditionalTestsComponent } from '@features/diagnosis-treatment/components/additional-tests/additional-tests.component';
import { DecisionComponent } from '@features/diagnosis-treatment/components/decision/decision.component';
import { TreatmentComponent } from '@features/diagnosis-treatment/components/treatment/treatment.component';
import { PreviousNextButtonsComponent } from '@shared/components/previous-next-buttons/previous-next-buttons.component';

@Component({
  selector: 'diagnosis-treatment',
  templateUrl: './diagnosis-treatment.component.html',
  styleUrls: ['./diagnosis-treatment.component.css']
})
export class DiagnosisTreatmentComponent implements OnInit {
    @ViewChild(PreviousNextButtonsComponent, {static: true}) compPrevNext!: PreviousNextButtonsComponent;

    //Components to cycle through as Vertical Sub-Tabs
    @ViewChild(AdditionalTestsComponent, {static: false}) compTests!: AdditionalTestsComponent;
    @ViewChild(TreatmentComponent, {static: false}) compTreatment!: TreatmentComponent;
    @ViewChild(DecisionComponent, {static: false}) compDecision!: DecisionComponent;

    //Horizontal Tabs with Vertical Sub-Tabs 
    public readonly ADDITIONAL_TESTS = 'additionalTests';
    public readonly TREATMENT = 'treatment';
    public readonly DECISION = 'decision';

  constructor() { }

  ngOnInit(): void { }

  public canMove(isNext: boolean): boolean {
    let retVal: boolean = true;

    switch(this.compPrevNext.currentMainHref) {
      case this.ADDITIONAL_TESTS: {
        retVal = this.compTests.subModuleHandler(isNext);
        break;
      }
      case this.TREATMENT: {
        retVal = this.compTreatment.subModuleHandler(isNext);
        break;
      }
      case this.DECISION: {
        retVal = this.compDecision.subModuleHandler(isNext);
        break;
      }
    }
    return retVal;
  }
}