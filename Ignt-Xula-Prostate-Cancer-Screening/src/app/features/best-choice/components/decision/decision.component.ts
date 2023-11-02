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
    menGettingScreened: 'menGettingScreenedTab',
    menNotGettingScreened: 'menNotGettingScreenedTab'
  };

  private objPrevNextMapping: any = {
    menGettingScreened: { prev: null, next: 'menNotGettingScreened' },
    menNotGettingScreened:  { prev: 'menGettingScreened', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("menGettingScreened");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
