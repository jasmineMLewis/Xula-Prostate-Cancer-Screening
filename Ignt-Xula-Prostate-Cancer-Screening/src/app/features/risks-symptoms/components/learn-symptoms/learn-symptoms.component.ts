import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'learn-symptoms',
  templateUrl: './learn-symptoms.component.html',
  styleUrls: ['./learn-symptoms.component.css']
})
export class LearnSymptomsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    learnSymptomsNone: 'learnSymptomsNoneTab',
    learnSymptomsCommon: 'learnSymptomsCommonTab',
    learnSymptomsOther: 'learnSymptomsOtherTab',
    learnSymptomsWhatToDo: 'learnSymptomsWhatToDoTab'
  };

  private objPrevNextMapping: any = {
    learnSymptomsNone: { prev: null, next: 'learnSymptomsCommon' },
    learnSymptomsCommon: { prev: 'learnSymptomsNone', next: 'learnSymptomsOther' },
    learnSymptomsOther: { prev: 'learnSymptomsCommon', next: 'learnSymptomsWhatToDo' },
    learnSymptomsWhatToDo: { prev: 'learnSymptomsOther', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("learnSymptomsNone");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
