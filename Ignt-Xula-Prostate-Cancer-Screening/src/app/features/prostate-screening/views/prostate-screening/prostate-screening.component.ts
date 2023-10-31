import { StepsComponent } from './../../components/steps/steps.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChoicesComponent } from '@features/prostate-screening/components/choices/choices.component';
import { ScreeningComponent } from '@features/prostate-screening/components/screening/screening.component';
import { PreviousNextButtonsComponent } from '@shared/components/previous-next-buttons/previous-next-buttons.component';

@Component({
  selector: 'prostate-screening',
  templateUrl: './prostate-screening.component.html',
  styleUrls: ['./prostate-screening.component.css']
})
export class ProstateScreeningComponent implements OnInit {
  @ViewChild(PreviousNextButtonsComponent, {static: true}) compPrevNext!: PreviousNextButtonsComponent;
  
  //Components to cycle through as Vertical Sub-Tabs
  @ViewChild(ScreeningComponent, {static: false}) compScreening!: ScreeningComponent;
  @ViewChild(ChoicesComponent, {static: false}) compChoice!: ChoicesComponent;
  @ViewChild(StepsComponent, {static: false}) compSteps!: StepsComponent;

  //Horizontal Tabs with Vertical Sub-Tabs 
  public readonly SCREENING  = 'screening';
  public readonly CHOICES = 'bestChoice';
  public readonly STEPS = 'steps';

  constructor() { }

  ngOnInit(): void {  }

  public canMove(isNext: boolean): boolean {
    let retVal: boolean = true;

    switch(this.compPrevNext.currentMainHref) {
      case this.SCREENING: {
        retVal = this.compScreening.subModuleHandler(isNext);
        break;
      }
      case this.CHOICES: {
       retVal = this.compChoice.subModuleHandler(isNext);
        break;
      }
      case this.STEPS: {
        retVal = this.compSteps.subModuleHandler(isNext);
      }
    }
    return retVal;
  }
}