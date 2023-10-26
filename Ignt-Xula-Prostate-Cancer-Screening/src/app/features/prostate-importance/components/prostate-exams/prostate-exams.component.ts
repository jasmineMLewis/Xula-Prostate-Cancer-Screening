import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-exams',
  templateUrl: './prostate-exams.component.html',
  styleUrls: ['./prostate-exams.component.css']
})
export class ProstateExamsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    prostateExamsHome: 'prostateExamsHomeTab',
    digitalRectalExam: 'digitalRectalExamTab',
    prostateSpecificAntigen: 'prostateSpecificAntigenTab'
  };

  private objPrevNextMapping: any = {
    prostateExamsHome: {prev: null,next: 'digitalRectalExam'},
    digitalRectalExam: {prev: 'prostateExamsHome',next: 'prostateSpecificAntigen'},
    prostateSpecificAntigen: {prev: 'digitalRectalExam',next: null}
  }

  constructor() { }

  ngOnInit(): void {
    this.setSubHrefTab("prostateExamsHome");
  }

  public setSubHrefTab(hrefName: string) {
    this.currentSubHref = hrefName;
    if(this.objTabMapping[hrefName]) {
      const elem = document.querySelector(`#${this.objTabMapping[hrefName]}`) as HTMLElement;
      elem.click();
    }
  }

 public subModuleHandler(isNext: boolean): boolean {
    let tab: string = "";
    if(isNext) {
      if(this.objPrevNextMapping[this.currentSubHref] && this.objPrevNextMapping[this.currentSubHref].next) {
        tab = this.objPrevNextMapping[this.currentSubHref].next;
      } 
    }
    else {
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
