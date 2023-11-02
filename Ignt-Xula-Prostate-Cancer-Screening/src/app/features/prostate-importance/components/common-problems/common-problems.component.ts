import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'common-problems',
  templateUrl: './common-problems.component.html',
  styleUrls: ['./common-problems.component.css']
})
export class CommonProblemsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    commonProblemsHome: 'commonProblemsHomeTab',
    enlargedProstate: 'enlargedProstateTab',
    inflammation: 'inflammationTab',
    tumorsCancer: 'tumorsCancerTab'
  };

  private objPrevNextMapping: any = {
    commonProblemsHome: { prev: null, next: 'enlargedProstate' },
    enlargedProstate: { prev: 'commonProblemsHome', next: 'inflammation' },
    inflammation: { prev: 'enlargedProstate', next: 'tumorsCancer' },
    tumorsCancer: { prev: 'inflammation', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("commonProblemsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
