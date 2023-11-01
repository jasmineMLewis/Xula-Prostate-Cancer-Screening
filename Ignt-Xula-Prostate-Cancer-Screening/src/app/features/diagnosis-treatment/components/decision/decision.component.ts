import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    decisionHome: 'decisionHomeTab',
    watchAndWait: 'watchAndWaitTab',
    activeTreatment: 'activeTreatmentTab',
    talkToYourDoctor: 'talkToYourDoctorTab'
  };

  private objPrevNextMapping: any = {
    decisionHome: { prev: null, next: 'watchAndWait' },
    watchAndWait: { prev: 'decisionHome', next: 'activeTreatment' },
    activeTreatment: { prev: 'watchAndWait', next: 'talkToYourDoctor' },
    talkToYourDoctor: { prev: 'activeTreatment', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("decisionHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
