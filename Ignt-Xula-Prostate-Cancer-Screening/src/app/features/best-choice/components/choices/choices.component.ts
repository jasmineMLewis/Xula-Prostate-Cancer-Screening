import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    screeningForYou: 'screeningForYouTab',
    watchfulWaiting: 'watchfulWaitingTab',
    prostateSurgery: 'prostateSurgeryTab'
  };

  private objPrevNextMapping: any = {
    screeningForYou: { prev: null, next: 'watchfulWaiting' },
    watchfulWaiting: { prev: 'screeningForYou', next: 'prostateSurgery' },
    prostateSurgery: { prev: 'watchfulWaiting', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("screeningForYou");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }

}
