import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.css']
})
export class RiskFactorsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    riskFactorsHome: 'riskFactorsHomeTab',
    age: 'ageTab',
    familyHistory: 'familyHistoryTab',
    race: 'raceTab'
  };

  private objPrevNextMapping: any = {
    riskFactorsHome: { prev: null, next: 'age' },
    age: { prev: 'riskFactorsHome', next: 'familyHistory' },
    familyHistory: { prev: 'age', next: 'race' },
    race: { prev: 'familyHistory', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("riskFactorsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
