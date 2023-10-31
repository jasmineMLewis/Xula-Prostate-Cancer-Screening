import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    cancerScreening: 'cancerScreeningTab',
    screeningTest: 'screeningTestTab',
    screeningForCancer: 'screeningForCancerTab'
  };

  private objPrevNextMapping: any = {
    cancerScreening: { prev: null, next: 'screeningTest' },
    screeningTest: { prev: 'cancerScreening', next: 'screeningForCancer'},
    screeningForCancer: { prev: 'screeningTest', next: null }
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("cancerScreening");
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
