import { Component, OnInit } from '@angular/core';
import { VerticalMenuService } from '@shared/services/vertical-menu.service';

@Component({
  selector: 'additional-tests',
  templateUrl: './additional-tests.component.html',
  styleUrls: ['./additional-tests.component.css'],
  providers: [ VerticalMenuService ]
})
export class AdditionalTestsComponent implements OnInit {
  public currentSubHref: string = "";

  private objTabMapping: any = {
    additionalTestsHome: 'additionalTestsHomeTab',
    bloodUrineTest: 'bloodUrineTestTab',
    transRectalUltrasound: 'transRectalUltrasoundTab',
    magneticResonanceImaging: 'magneticResonanceImagingTab',
    biopsy: 'biopsyTab'
  };

  private objPrevNextMapping: any = {
    additionalTestsHome: { prev: null, next: 'bloodUrineTest' },
    bloodUrineTest: { prev: 'additionalTestsHome', next: 'transRectalUltrasound' },
    transRectalUltrasound: { prev: 'bloodUrineTest', next: 'magneticResonanceImaging' },
    magneticResonanceImaging: { prev: 'transRectalUltrasound', next: 'biopsy' },
    biopsy: { prev: 'transRectalUltrasound', next: null }
  }

  constructor(private verticalMenuService: VerticalMenuService) { }

  ngOnInit(): void {
    this.setSubHrefTab("additionalTestsHome");
  }

  public setSubHrefTab(hrefName: string): void {
    this.currentSubHref = hrefName;
    this.verticalMenuService.setSubHrefTab(hrefName, this.objTabMapping);
  }

  public subModuleHandler(isNext: boolean): boolean {
    return this.verticalMenuService.subModuleHandler(isNext, this.currentSubHref, this.objTabMapping, this.objPrevNextMapping)
  }
}