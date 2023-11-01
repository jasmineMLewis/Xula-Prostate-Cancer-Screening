import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    treatmentHome: 'treatmentHomeTab',
    noProblem: 'noProblemTab',
    mayBeSomeProblem: 'mayBeSomeProblemTab',
    seriousProblem: 'seriousProblemTab'
  };

  private objPrevNextMapping: any = {
    treatmentHome: { prev: null, next: 'noProblem' },
    noProblem: { prev: 'treatmentHome', next: 'mayBeSomeProblem' },
    mayBeSomeProblem: { prev: 'noProblem', next: 'seriousProblem' },
    seriousProblem: { prev: 'mayBeSomeProblem', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("treatmentHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}