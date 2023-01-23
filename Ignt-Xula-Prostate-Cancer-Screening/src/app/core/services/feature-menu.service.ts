import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureMenuService {
  readonly PROSTATE_IMPORTANCE: string = 'prostate-importance';

  public menu = [
    {
      feature: this.PROSTATE_IMPORTANCE,
      href: 'title',
      subHref: '',
      tab: 'titleTab',
      subTab: '',
    },
    {
      feature: this.PROSTATE_IMPORTANCE,
      href: 'prostate',
      subHref: '',
      tab: 'prostateTab',
      subTab: '',
    },
    {
      feature: this.PROSTATE_IMPORTANCE,
      href: 'commonProblem',
      subHref: '',
      tab: 'commonProblemsHomeTab',
      subTab: '',
    },
    {
     feature: this.PROSTATE_IMPORTANCE,
      href: 'commonProblem',
      subHref: 'enlargedProstate',
      tab: 'enlargedProstateTab',
      subTab: '',
    }
  ];

  public currentHref: string = 'title';
  public currentSubHref: string = '';
  public currentTab: string = 'titleTab';
  public currentSubTab: string = '';
  public isActive = false;
  public isNextButtonVisible = false;
  public isPreviousButtonVisible = false;

  // {
  //  feature: this.PROSTATE_IMPORTANCE,
  //   href: '',
  //   subHref: '',
  //   tab: '',
  //   subTab: ''
  // }

  constructor() {}

  public setHrefsTabs(href: string, subHref: string, tab: string, subTab: string): void {
    this.currentHref = href;
    this.currentSubHref = subHref;
    this.currentTab = tab;
    this.currentSubTab = tab;
  }
}
