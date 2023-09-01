import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNavTabs } from '@core/models/module-nav-tabs';
import { PROSTATE_IMPORTANCE_MODULE_NAV_TAB } from '@core/data/prostate-importance-data';
import { RISKS_SYMPTOMS_MODULE_NAV_TAB } from '@core/data/risks-symptoms-data';
import { PROSTATE_SCREENING_MODULE_NAV_TAB } from '@core/data/prostate-screening-data';
import { DIAGNOSIS_TREATMENT_MODULE_NAV_TAB } from '@core/data/diagnosis-treatment-data';
import { BEST_CHOICE_MODULE_NAV_TAB } from '@core/data/best-choice-data';

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
  public isNextButtonVisible: boolean = true;

  //Navigation Tabs' Data
  public prostateImportanceModuleNavTabData: ModuleNavTabs[] = PROSTATE_IMPORTANCE_MODULE_NAV_TAB;
  public risksSymptomsModuleNavTabData: ModuleNavTabs[] = RISKS_SYMPTOMS_MODULE_NAV_TAB;
  public prostateScreeningModuleNavTabData: ModuleNavTabs[] = PROSTATE_SCREENING_MODULE_NAV_TAB;
  public diagnosisTreatmentModuleNavTabData: ModuleNavTabs[] = DIAGNOSIS_TREATMENT_MODULE_NAV_TAB;
  public bestChoiceModuleNavTabData: ModuleNavTabs[] = BEST_CHOICE_MODULE_NAV_TAB;

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

  // public displayNextButton(): void {
  //   this.isNextButtonVisible = ((this.currentHref === this.CREDITS) && (this.currentTab === this.CREDITS) && (this.module === this.BEST_CHOICE)) ? true : false;
  //   console.log("this.isNextButtonVisible " + this.isNextButtonVisible);
  //   // if ((this.currentHref === this.CREDITS) && (this.currentTab === this.CREDITS) && (module === this.BEST_CHOICE)) {
  //   //   this.isNextButtonVisible = false;
  //   // } else {
  //   //   this.isNextButtonVisible = true;
  //   // }
  // }

  public naviagteToModule(module: string): void {
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
        //console.log('BEST_CHOICE: In Else for Credits');
        //hide next button
        //this.isNextButtonVisible = false;
      }
    }

    navigationDetails.push(routeTo);
    this.router.navigate(navigationDetails);
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
        if (this.currentHref !== this.prostateImportanceModuleNavTabData[this.prostateImportanceModuleNavTabData.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.prostateImportanceModuleNavTabData.findIndex((h) => h.href === currHref);

          this.currentHref = this.prostateImportanceModuleNavTabData[i + 1].href!;
          this.currentTab = this.prostateImportanceModuleNavTabData[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
          //this.displayNextButton();

          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        }
        break;
      case this.RISK_SYMPTOMS:
        if (this.currentHref !== this.risksSymptomsModuleNavTabData[this.risksSymptomsModuleNavTabData.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.risksSymptomsModuleNavTabData.findIndex((h) => h.href === currHref);

          this.currentHref = this.risksSymptomsModuleNavTabData[i + 1].href!;
          this.currentTab = this.risksSymptomsModuleNavTabData[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
          //this.displayNextButton(this.BEST_CHOICE);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        }
        break;
      case this.PROSTATE_SCREENING:
        if (this.currentHref !== this.prostateScreeningModuleNavTabData[this.prostateScreeningModuleNavTabData.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.prostateScreeningModuleNavTabData.findIndex((h) => h.href === currHref);

          this.currentHref = this.prostateScreeningModuleNavTabData[i + 1].href!;
          this.currentTab = this.prostateScreeningModuleNavTabData[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
          //this.displayNextButton(this.BEST_CHOICE);

          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        }
        break;
      case this.DIAGNOSIS_TREATMENT:
        if (this.currentHref !== this.diagnosisTreatmentModuleNavTabData[this.diagnosisTreatmentModuleNavTabData.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.diagnosisTreatmentModuleNavTabData.findIndex((h) => h.href === currHref);

          this.currentHref = this.diagnosisTreatmentModuleNavTabData[i + 1].href!;
          this.currentTab = this.diagnosisTreatmentModuleNavTabData[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
          //this.displayNextButton(this.BEST_CHOICE);

          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        }
        break;
      case this.BEST_CHOICE:
        if (this.currentHref !== this.bestChoiceModuleNavTabData[this.bestChoiceModuleNavTabData.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.bestChoiceModuleNavTabData.findIndex((h) => h.href === currHref);

          this.currentHref = this.bestChoiceModuleNavTabData[i + 1].href!;
          this.currentTab = this.bestChoiceModuleNavTabData[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
          //this.displayNextButton(this.BEST_CHOICE);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === this.CREDITS) {
            this.naviagteToModule(module);
          }
        }
        break; 
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
        if (this.currentHref !== this.prostateImportanceModuleNavTabData[0].href) {
          const currHref = this.currentHref;
          const i = this.prostateImportanceModuleNavTabData.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.prostateImportanceModuleNavTabData[i - 1].href!;
          this.currentTab = this.prostateImportanceModuleNavTabData[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.prostateImportanceModuleNavTabData[0].href){
          this.naviagteToModule(module);
        }
        break;
      case this.RISK_SYMPTOMS:
        if (this.currentHref !== this.risksSymptomsModuleNavTabData[0].href) {
          const currHref = this.currentHref;
          const i = this.risksSymptomsModuleNavTabData.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.risksSymptomsModuleNavTabData[i - 1].href!;
          this.currentTab = this.risksSymptomsModuleNavTabData[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.risksSymptomsModuleNavTabData[0].href) {
          this.naviagteToModule(module);
        }
        break;
      case this.PROSTATE_SCREENING:
        if (this.currentHref !== this.prostateScreeningModuleNavTabData[0].href) {
          const currHref = this.currentHref;
          const i = this.prostateScreeningModuleNavTabData.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.prostateScreeningModuleNavTabData[i - 1].href!;
          this.currentTab = this.prostateScreeningModuleNavTabData[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.prostateScreeningModuleNavTabData[0].href) {
          this.naviagteToModule(module);
        }
        break;
      case this.DIAGNOSIS_TREATMENT:
        if (this.currentHref !== this.diagnosisTreatmentModuleNavTabData[0].href) {
          const currHref = this.currentHref;
          const i = this.diagnosisTreatmentModuleNavTabData.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.diagnosisTreatmentModuleNavTabData[i - 1].href!;
          this.currentTab = this.diagnosisTreatmentModuleNavTabData[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.diagnosisTreatmentModuleNavTabData[0].href) {
          this.naviagteToModule(module);
        }
        break;
      case this.BEST_CHOICE:
        if (this.currentHref !== this.bestChoiceModuleNavTabData[0].href) {
          const currHref = this.currentHref;
          const i = this.bestChoiceModuleNavTabData.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.bestChoiceModuleNavTabData[i - 1].href!;
          this.currentTab = this.bestChoiceModuleNavTabData[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.bestChoiceModuleNavTabData[0].href) {
          this.naviagteToModule(module);
        }
        break;
    }
  }

  public setHrefTab(href: string, tab: string): void {
    this.currentHref = href;
    this.currentTab = tab;

    //this.displayNextButton();
  }
}