import { Component, OnInit, ViewChild } from '@angular/core';
import { ChoicesComponent } from '@features/best-choice/components/choices/choices.component';
import { DecisionComponent } from '@features/best-choice/components/decision/decision.component';
import { PreviousNextButtonsComponent } from '@shared/components/previous-next-buttons/previous-next-buttons.component';

@Component({
  selector: 'best-choice',
  templateUrl: './best-choice.component.html',
  styleUrls: ['./best-choice.component.css']
})
export class BestChoiceComponent implements OnInit {
  @ViewChild(PreviousNextButtonsComponent, {static: true}) compPrevNext!: PreviousNextButtonsComponent;
  
  //Components to cycle through as Vertical Sub-Tabs
  @ViewChild(ChoicesComponent, {static: false}) compChoices!: ChoicesComponent;
  @ViewChild(DecisionComponent, {static: false}) compDecision!: DecisionComponent;

  //Horizontal Tabs with Vertical Sub-Tabs 
  public readonly CHOICES = 'choices';
  public readonly DECISION = 'decision';

  constructor() { }

  ngOnInit(): void { }
  
  public canMove(isNext: boolean): boolean {
    let retVal: boolean = true;

    switch(this.compPrevNext.currentMainHref) {
      case this.CHOICES: {
        retVal = this.compChoices.subModuleHandler(isNext);
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