import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleMainTabs } from '@core/models/module-main-tabs';
import { PROSTATE_IMPORTANCE_MAIN_TAB_DATA } from '@core/data/prostate-importance-main-tab-data';
import { RISKS_SYMPTOMS_MAIN_TAB_DATA } from '@core/data/risks-symptoms-main-tab-data';
import { PROSTATE_SCREENING_MAIN_TAB_DATA } from '@core/data/prostate-screening-main-tab-data';
import { DIAGNOSIS_TREATMENT_MAIN_TAB_DATA } from '@core/data/diagnosis-treatment-main-tab-data';
import { BEST_CHOICE_MAIN_TAB_DATA } from '@core/data/best-choice-main-tab-data';

@Component({
  selector: 'previous-next-buttons',
  templateUrl: './previous-next-buttons.component.html',
  styleUrls: ['./previous-next-buttons.component.css']
})
export class PreviousNextButtonsComponent {
  @Input() module: string = '';
  @Input() canMove: any;

  //Main Tabs' Current State
  public currentMainHref: string = 'title';
  public currentMainTab: string = 'titleTab';
  public isActive: boolean = false;

  //Main Tabs' Data
  public prostateImportanceMainTabData: ModuleMainTabs[] = PROSTATE_IMPORTANCE_MAIN_TAB_DATA;
  public risksSymptomsMainTabData: ModuleMainTabs[] = RISKS_SYMPTOMS_MAIN_TAB_DATA;
  public prostateScreeningMainTabData: ModuleMainTabs[] = PROSTATE_SCREENING_MAIN_TAB_DATA;
  public diagnosisTreatmentMainTabData: ModuleMainTabs[] = DIAGNOSIS_TREATMENT_MAIN_TAB_DATA;
  public bestChoiceMainTabData: ModuleMainTabs[] = BEST_CHOICE_MAIN_TAB_DATA;

  //Modules
  public readonly HOME = 'home';
  public readonly PROSTATE_IMPORTANCE = 'prostate-importance';
  public readonly RISK_SYMPTOMS = 'risks-symptoms';
  public readonly PROSTATE_SCREENING = 'prostate-screening';
  public readonly DIAGNOSIS_TREATMENT = 'diagnosis-treatment';
  public readonly BEST_CHOICE = 'best-choice';

  //Main First & Last Tabs 
  public readonly TITLE = "title";
  public readonly CREDITS = "credits";

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public getMainHref(): string {
    return this.currentMainHref;
  }

  public getMainTab(): string {
    return this.currentMainTab;
  }

  public naviagteModule(module: string): void {  
    const navigationDetails: string[] = [];
    var routeTo = '';

    if(this.currentMainHref === this.TITLE){
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

    if (this.currentMainHref === this.CREDITS) {
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
    if (this.currentMainHref === this.CREDITS) {
      this.naviagteModule(module);
    }
  }

  public next(module: string = ''): void {
    var moduleMainTabData: ModuleMainTabs[];

    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        moduleMainTabData = Array.from(this.prostateImportanceMainTabData);
        break;
      case this.RISK_SYMPTOMS:
        moduleMainTabData = Array.from(this.risksSymptomsMainTabData);
        break;
      case this.PROSTATE_SCREENING:
        moduleMainTabData = Array.from(this.prostateScreeningMainTabData);
        break;
      case this.DIAGNOSIS_TREATMENT:
        moduleMainTabData = Array.from(this.diagnosisTreatmentMainTabData);
        break;
      case this.BEST_CHOICE:
        moduleMainTabData = Array.from(this.bestChoiceMainTabData);
        break;
    }

   if (this.currentMainHref !== moduleMainTabData![moduleMainTabData!.length - 1].href) {
      let moveAhead: boolean = true;

      if(this.canMove && !this.canMove(true)) {
        moveAhead = false;
      }

      if(moveAhead) {
        const currMainHref = this.currentMainHref;
        const i = moduleMainTabData!.findIndex((h) => h.href === currMainHref);

        this.currentMainHref = moduleMainTabData![i + 1].href!;        
        this.currentMainTab = moduleMainTabData![i + 1].tab!;

        this.isActive = true;
        this.setHrefTab(this.currentMainHref, this.currentMainTab);

        let elementMainTab: HTMLElement = document.getElementById(this.currentMainTab) as HTMLElement;
        elementMainTab.click();
      }
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
    var moduleMainTabData: ModuleMainTabs[];

    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        moduleMainTabData = Array.from(this.prostateImportanceMainTabData);
        break;
      case this.RISK_SYMPTOMS:
        moduleMainTabData = Array.from(this.risksSymptomsMainTabData);
        break;
      case this.PROSTATE_SCREENING:
        moduleMainTabData = Array.from(this.prostateScreeningMainTabData);
        break;
      case this.DIAGNOSIS_TREATMENT:
        moduleMainTabData = Array.from(this.diagnosisTreatmentMainTabData);
        break;
      case this.BEST_CHOICE:
        moduleMainTabData = Array.from(this.bestChoiceMainTabData);
        break;
    }

    if (this.currentMainHref !== moduleMainTabData![0].href) {
      let moveAhead: boolean = true;

      if(this.canMove && !this.canMove(false)) {
        moveAhead = false;
      }

      if(moveAhead) {
        const currHref = this.currentMainHref;
        const i = moduleMainTabData!.findIndex((h) => h.href === currHref);

        this.currentMainHref = moduleMainTabData![i - 1].href!;
        this.currentMainTab = moduleMainTabData![i - 1].tab!;

        this.isActive = true;
        this.setHrefTab(this.currentMainHref, this.currentMainTab);

        let element: HTMLElement = document.getElementById(this.currentMainTab) as HTMLElement;
        element.click();
      }
    }  else if(this.currentMainHref == moduleMainTabData![0].href){
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
    this.setMainHref(href);
    this.setMainTab(tab);
  }

  public setMainHref(href: string): void{
    this.currentMainHref = href;
  }

  public setMainTab(tab: string): void{
    this.currentMainTab = tab;
  }
}