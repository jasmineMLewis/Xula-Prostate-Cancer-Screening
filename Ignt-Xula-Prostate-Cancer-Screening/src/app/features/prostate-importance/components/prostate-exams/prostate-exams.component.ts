import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'prostate-exams',
  templateUrl: './prostate-exams.component.html',
  styleUrls: ['./prostate-exams.component.css']
})
export class ProstateExamsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    prostateExamsHome: 'prostateExamsHomeTab',
    digitalRectalExam: 'digitalRectalExamTab',
    prostateSpecificAntigen: 'prostateSpecificAntigenTab'
  };

  private objPrevNextMapping: any = {
    prostateExamsHome: { prev: null, next: 'digitalRectalExam' },
    digitalRectalExam: { prev: 'prostateExamsHome', next: 'prostateSpecificAntigen' },
    prostateSpecificAntigen: { prev: 'digitalRectalExam', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("prostateExamsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}
