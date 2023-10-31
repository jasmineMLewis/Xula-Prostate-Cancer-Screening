import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learn-symptoms',
  templateUrl: './learn-symptoms.component.html',
  styleUrls: ['./learn-symptoms.component.css']
})
export class LearnSymptomsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    learnSymptomsNone: 'learnSymptomsNoneTab',
    learnSymptomsCommon: 'learnSymptomsCommonTab',
    learnSymptomsOther: 'learnSymptomsOtherTab',
    learnSymptomsWhatToDo: 'learnSymptomsWhatToDoTab'
  };

  private objPrevNextMapping: any = {
    learnSymptomsNone: { prev: null, next: 'learnSymptomsCommon' },
    learnSymptomsCommon: { prev: 'learnSymptomsNone', next: 'learnSymptomsOther' },
    learnSymptomsOther: { prev: 'learnSymptomsCommon', next: 'learnSymptomsWhatToDo' },
    learnSymptomsWhatToDo: { prev: 'learnSymptomsOther', next: null }
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("learnSymptomsNone");
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
