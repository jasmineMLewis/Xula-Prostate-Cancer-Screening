import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

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

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("cancerScreening");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}