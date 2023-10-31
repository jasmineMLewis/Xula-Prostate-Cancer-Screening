import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerticalMenuService {

  constructor() { }

  public setSubHrefTab(hrefName: string, objTabMapping: any): void {
    if(objTabMapping[hrefName]) {
      const element = document.querySelector(`#${objTabMapping[hrefName]}`) as HTMLElement;
      element.click();
    }
  }

 public subModuleHandler(isNext: boolean, currentSubHref: string, objTabMapping: any, objPrevNextMapping: any): boolean {
    let tab: string = "";

    if(isNext) {
      if(objPrevNextMapping[currentSubHref] && objPrevNextMapping[currentSubHref].next) {
        tab = objPrevNextMapping[currentSubHref].next;
      } 
    } else {
      if(objPrevNextMapping[currentSubHref] && objPrevNextMapping[currentSubHref].prev) {
        tab = objPrevNextMapping[currentSubHref].prev;
      } 
    }

    if(tab) {
      this.setSubHrefTab(tab, objTabMapping);
      return false;
    }
    return true;
  }
}