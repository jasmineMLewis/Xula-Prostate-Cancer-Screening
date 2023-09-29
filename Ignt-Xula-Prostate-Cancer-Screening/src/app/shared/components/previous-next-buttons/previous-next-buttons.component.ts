import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNavTabs } from '@core/models/module-nav-tabs';
import { PROSTATE_IMPORTANCE_TAB_DATA } from '@core/data/prostate-importance-data';
import { RISKS_SYMPTOMS_TAB_DATA } from '@core/data/risks-symptoms-data';
import { PROSTATE_SCREENING_TAB_DATA } from '@core/data/prostate-screening-data';
import { DIAGNOSIS_TREATMENT_TAB_DATA } from '@core/data/diagnosis-treatment-data';
import { BEST_CHOICE_NAV_TAB_DATA } from '@core/data/best-choice-data';

@Component({
  selector: 'previous-next-buttons',
  templateUrl: './previous-next-buttons.component.html',
  styleUrls: ['./previous-next-buttons.component.css']
})
export class PreviousNextButtonsComponent {
  @Input() module: string = '';

  //Navigation Tabs' Current State
  public currentHref: string = 'title';
  public currentTab: string = 'titleTab';
  public isActive: boolean = false;
  //public isNextButtonVisible: boolean = true;

  //Module Navigation Tabs' Data
  public prostateImportanceTabData: ModuleNavTabs[] = PROSTATE_IMPORTANCE_TAB_DATA;
  public risksSymptomsTabData: ModuleNavTabs[] = RISKS_SYMPTOMS_TAB_DATA;
  public prostateScreeningTabData: ModuleNavTabs[] = PROSTATE_SCREENING_TAB_DATA;
  public diagnosisTreatmentTabData: ModuleNavTabs[] = DIAGNOSIS_TREATMENT_TAB_DATA;
  public bestChoiceTabData: ModuleNavTabs[] = BEST_CHOICE_NAV_TAB_DATA;

  //Modules
  public readonly HOME = 'home';
  public readonly PROSTATE_IMPORTANCE = 'prostate-importance';
  public readonly RISK_SYMPTOMS = 'risks-symptoms';
  public readonly PROSTATE_SCREENING = 'prostate-screening';
  public readonly DIAGNOSIS_TREATMENT = 'diagnosis-treatment';
  public readonly BEST_CHOICE = 'best-choice';

  //Navigation Tabs' Name
  public readonly TITLE = "title";
  public readonly CREDITS = "credits";

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public naviagteModule(module: string): void {
    const navigationDetails: string[] = [];
    var routeTo = '';

    if(this.currentHref === this.TITLE){
      if(module === this.PROSTATE_IMPORTANCE){
        routeTo = this.HOME;
      } else if(module === this.RISK_SYMPTOMS) {
        routeTo = this.PROSTATE_IMPORTANCE;
      } else if(module === this.PROSTATE_SCREENING) {
        routeTo = this.RISK_SYMPTOMS;
      } else if(module === this.DIAGNOSIS_TREATMENT) {
        routeTo = this.PROSTATE_SCREENING;
      } else if (module === this.BEST_CHOICE) {
        routeTo = this.DIAGNOSIS_TREATMENT;
      }
    }

    if (this.currentHref === this.CREDITS) {
      if (module === this.PROSTATE_IMPORTANCE) {
        routeTo = this.RISK_SYMPTOMS;
      } else if (module === this.RISK_SYMPTOMS) {
        routeTo = this.PROSTATE_SCREENING;
      } else if (module === this.PROSTATE_SCREENING) {
        routeTo = this.DIAGNOSIS_TREATMENT;
      } else if (module === this.DIAGNOSIS_TREATMENT) {
        routeTo = this.BEST_CHOICE;
      } else if (module === this.BEST_CHOICE) {
        routeTo = this.HOME;
      }
    }

    navigationDetails.push(routeTo);
    this.router.navigate(navigationDetails);
  }

  public navigateModuleCredits(module: string): void {
    if (this.currentHref === this.CREDITS) {
      this.naviagteModule(module);
    }
  }

  public next(module: string = ''): void {
    var moduleNavTabData: ModuleNavTabs[];

    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        moduleNavTabData = Array.from(this.prostateImportanceTabData);
        break;
      case this.RISK_SYMPTOMS:
        moduleNavTabData = Array.from(this.risksSymptomsTabData);
        break;
      case this.PROSTATE_SCREENING:
        moduleNavTabData = Array.from(this.prostateScreeningTabData);
        break;
      case this.DIAGNOSIS_TREATMENT:
        moduleNavTabData = Array.from(this.diagnosisTreatmentTabData);
        break;
      case this.BEST_CHOICE:
        moduleNavTabData = Array.from(this.bestChoiceTabData);
        break;
    }

   if (this.currentHref !== moduleNavTabData![moduleNavTabData!.length - 1].href) {
      const currHref = this.currentHref;
      const i = moduleNavTabData!.findIndex((h) => h.href === currHref);

      this.currentHref = moduleNavTabData![i + 1].href!;
      this.currentTab = moduleNavTabData![i + 1].tab!;

      this.isActive = true;
      this.setHrefTab(this.currentHref, this.currentTab);

      let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
      element.click();
    }
  }

  public nextButton(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        this.nextModuleTab(module);
        break;
      case this.RISK_SYMPTOMS:
        this.nextModuleTab(module);
        break;
      case this.PROSTATE_SCREENING:
        this.nextModuleTab(module);
        break;
      case this.DIAGNOSIS_TREATMENT:
        this.nextModuleTab(module);
        break;
      case this.BEST_CHOICE:
        this.nextModuleTab(module);
        break;
    }
  }

  public nextModuleTab(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        this.next(module);
        this.navigateModuleCredits(module);
        break;
      case this.RISK_SYMPTOMS:
        this.next(module);
        this.navigateModuleCredits(module);
        break;
      case this.PROSTATE_SCREENING:
        this.next(module);
        this.navigateModuleCredits(module);
        break;
      case this.DIAGNOSIS_TREATMENT:
        this.next(module);
        this.navigateModuleCredits(module);
        break;
      case this.BEST_CHOICE:
        this.next(module);
        this.navigateModuleCredits(module);
        break;
    }
  }

  public previous(module: string = '') {
    var moduleNavTabData: ModuleNavTabs[];

    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        moduleNavTabData = Array.from(this.prostateImportanceTabData);
        break;
      case this.RISK_SYMPTOMS:
        moduleNavTabData = Array.from(this.risksSymptomsTabData);
        break;
      case this.PROSTATE_SCREENING:
        moduleNavTabData = Array.from(this.prostateScreeningTabData);
        break;
      case this.DIAGNOSIS_TREATMENT:
        moduleNavTabData = Array.from(this.diagnosisTreatmentTabData);
        break;
      case this.BEST_CHOICE:
        moduleNavTabData = Array.from(this.bestChoiceTabData);
        break;
    }

    if (this.currentHref !== moduleNavTabData![0].href) {
      const currHref = this.currentHref;
      const i = moduleNavTabData!.findIndex((h) => h.href === currHref);

      this.currentHref = moduleNavTabData![i - 1].href!;
      this.currentTab = moduleNavTabData![i - 1].tab!;

      this.isActive = true;
      this.setHrefTab(this.currentHref, this.currentTab);

      let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
      element.click();
    }  else if(this.currentHref == moduleNavTabData![0].href){
      this.naviagteModule(module);
    }
  }

  public previousButton(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        this.previousModuleTab(module);
        break;
      case this.RISK_SYMPTOMS:
        this.previousModuleTab(module);
        break;
      case this.PROSTATE_SCREENING:
        this.previousModuleTab(module);
        break;
      case this.DIAGNOSIS_TREATMENT:
        this.previousModuleTab(module);
        break;
      case this.BEST_CHOICE:
        this.previousModuleTab(module);
        break;
    }
  }

  public previousModuleTab(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        this.previous(module);
        break;
      case this.RISK_SYMPTOMS:
        this.previous(module);
        break;
      case this.PROSTATE_SCREENING:
        this.previous(module);
        break;
      case this.DIAGNOSIS_TREATMENT:
        this.previous(module);
        break;
      case this.BEST_CHOICE:
        this.previous(module);
        break;
    }
  }

  public setHrefTab(href: string, tab: string): void {
    this.currentHref = href;
    this.currentTab = tab;
  }
}