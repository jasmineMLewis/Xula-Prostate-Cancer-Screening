import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonProblemsComponent } from '@features/prostate-importance/components/common-problems/common-problems.component';
import { ProstateExamsComponent } from '@features/prostate-importance/components/prostate-exams/prostate-exams.component';
import { SymptomsComponent } from '@features/prostate-importance/components/symptoms/symptoms.component';
import { PreviousNextButtonsComponent } from '@shared/components/previous-next-buttons/previous-next-buttons.component';

@Component({
  selector: 'prostate-importance',
  templateUrl: './prostate-importance.component.html',
  styleUrls: ['./prostate-importance.component.css']
})
export class ProstateImportanceComponent implements OnInit {
  @ViewChild(PreviousNextButtonsComponent,{static: true}) compPrevNext!: PreviousNextButtonsComponent;
  
  //Components to cycle through
  @ViewChild(CommonProblemsComponent,{static: false}) compProblems!: CommonProblemsComponent;
  @ViewChild(SymptomsComponent,{static: false}) compSymptoms!: SymptomsComponent;
  @ViewChild(ProstateExamsComponent,{static: false}) compExam!: ProstateExamsComponent;
 
  //Horizontal Tabs with Vertical Sub-Tabs 
  public readonly COMMON_PROBLEM = 'commonProblem';
  public readonly SYMPTOMS  = 'symptoms';
  public readonly PROSTATE_EXAM = 'prostateExam';

  constructor() { }
  
  ngOnInit(): void {  }

  public canMove(isNext: boolean): boolean {
    let retVal: boolean = true;

    switch(this.compPrevNext.currentMainHref) {
      case this.COMMON_PROBLEM: {
        retVal = this.compProblems.subModuleHandler(isNext);
        break;
      }
      case this.SYMPTOMS: {
        retVal = this.compSymptoms.subModuleHandler(isNext);
        break;
      }
      case this.PROSTATE_EXAM: {
        retVal = this.compExam.subModuleHandler(isNext);
        break;
      }
    }
    return retVal;
  }
}