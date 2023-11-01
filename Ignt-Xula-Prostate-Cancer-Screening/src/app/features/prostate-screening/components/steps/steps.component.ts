import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    stepsHome: 'stepsHomeTab',
    stepOne: 'stepOneTab',
    stepTwo: 'stepTwoTab',
    stepThree: 'stepThreeTab'
  };

  private objPrevNextMapping: any = {
    stepsHome: { prev: null, next: 'stepOne' },
    stepOne: { prev: 'stepsHome', next: 'stepTwo' },
    stepTwo: { prev: 'stepOne', next: 'stepThree' },
    stepThree: { prev: 'stepTwo', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("stepsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
