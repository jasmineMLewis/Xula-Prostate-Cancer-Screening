import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-problems',
  templateUrl: './common-problems.component.html',
  styleUrls: ['./common-problems.component.css']
})
export class CommonProblemsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    commonProblemsHome: 'commonProblemsHomeTab',
    enlargedProstate: 'enlargedProstateTab',
    inflammation: 'inflammationTab',
    tumorsCancer: 'tumorsCancerTab'
  };

  private objPrevNextMapping: any = {
    commonProblemsHome: {prev: null, next: 'enlargedProstate'},
    enlargedProstate: {prev: 'commonProblemsHome', next: 'inflammation'},
    inflammation: {prev: 'enlargedProstate', next: 'tumorsCancer'},
    tumorsCancer: {prev: 'inflammation', next: null}
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("commonProblemsHome");
  }

  public setSubHrefTab(hrefName: string) {
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
