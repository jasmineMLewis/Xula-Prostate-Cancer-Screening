import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    stepsHome: 'stepsHomeTab',
    stepOne: 'stepOneTab',
    stepTwo: 'stepTwoTab',
    stepThree: 'stepThreeTab'
  };

  private objPrevNextMapping: any = {
    stepsHome: { prev: null, next: 'stepOne' },
    stepOne: { prev: 'stepsHome', next: 'stepTwo' },
    stepTwo: { prev: 'stepOne', next: 'stepThree' },
    stepThree: { prev: 'stepTwo', next: null }
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("stepsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;

    if(this.objTabMapping[hrefName]) {
      const element = document.querySelector(`#${this.objTabMapping[hrefName]}`) as HTMLElement;
      element.click();
    }
  }

  public subModuleHandler(isNext: boolean): boolean {
    let tab: string = "";

    if(isNext) {
      if(this.objPrevNextMapping[this.currentSubHref] && this.objPrevNextMapping[this.currentSubHref].next) {
        tab = this.objPrevNextMapping[this.currentSubHref].next;
      } 
    } else {
      if(this.objPrevNextMapping[this.currentSubHref] && this.objPrevNextMapping[this.currentSubHref].prev) {
        tab = this.objPrevNextMapping[this.currentSubHref].prev;
      } 
    }

    if(tab) {
      this.setSubHrefTab(tab);
      return false;
    }
    return true;
  }
}
