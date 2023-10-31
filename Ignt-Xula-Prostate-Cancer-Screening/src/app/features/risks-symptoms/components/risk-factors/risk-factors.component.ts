import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.css']
})
export class RiskFactorsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    riskFactorsHome: 'riskFactorsHomeTab',
    age: 'ageTab',
    familyHistory: 'familyHistoryTab',
    race: 'raceTab'
  };

  private objPrevNextMapping: any = {
    riskFactorsHome: { prev: null, next: 'age' },
    age: { prev: 'riskFactorsHome', next: 'familyHistory' },
    familyHistory: { prev: 'age', next: 'race' },
    race: { prev: 'familyHistory', next: null }
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("riskFactorsHome");
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
