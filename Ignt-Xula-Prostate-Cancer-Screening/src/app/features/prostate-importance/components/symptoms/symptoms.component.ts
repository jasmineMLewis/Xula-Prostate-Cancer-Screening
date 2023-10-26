import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    urineRelated: 'urineRelatedTab',
    commonSymptoms: 'commonSymptomsTab'
  };

  private objPrevNextMapping: any = {
    urineRelated: {prev: null,next: 'commonSymptoms'},
    commonSymptoms: {prev: 'urineRelated',next: null}
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("urineRelated");
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