import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    choice: 'choiceTab',
    sharedDecisionMaking: 'sharedDecisionMakingTab'
  };

  private objPrevNextMapping: any = {
    choice: { prev: null, next: 'sharedDecisionMaking' },
    sharedDecisionMaking: { prev: 'choice', next: null }
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("choice");
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