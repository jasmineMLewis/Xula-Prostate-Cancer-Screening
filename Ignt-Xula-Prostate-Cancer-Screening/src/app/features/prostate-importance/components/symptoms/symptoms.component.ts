import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

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
    urineRelated: { prev: null, next: 'commonSymptoms' },
    commonSymptoms: { prev: 'urineRelated', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }
  
  ngOnInit(): void {
    this.setSubHrefTab("urineRelated");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}