import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNavTabs } from '@core/models/module-nav-tabs';
import { PROSTATE_IMPORTANCE_MODULE_NAV_TAB } from '@core/data/prostate-importance-data';
import { RISKS_SYMPTOMS_MODULE_NAV_TAB } from '@core/data/risks-symptoms-data';
import { PROSTATE_SCREENING_MODULE_NAV_TAB } from '@core/data/prostate-screening-data';

@Component({
  selector: 'previous-next-buttons',
  templateUrl: './previous-next-buttons.component.html',
  styleUrls: ['./previous-next-buttons.component.css']
})
export class PreviousNextButtonsComponent {
  @Input() module: string = '';

  public currentHref: string = 'title';
  public currentTab: string = 'titleTab';
  public isActive: boolean = false;

  public prostateImportanceModuleNavTab: ModuleNavTabs[] = PROSTATE_IMPORTANCE_MODULE_NAV_TAB;
  public risksSymptomsModuleNaveTab: ModuleNavTabs[] = RISKS_SYMPTOMS_MODULE_NAV_TAB;
  public prostateScreeningModuleNavTab: ModuleNavTabs[] = PROSTATE_SCREENING_MODULE_NAV_TAB;

  public readonly HOME = 'home';
  public readonly PROSTATE_IMPORTANCE = 'prostate-importance';
  public readonly RISK_SYMPTOMS = 'risks-symptoms';
  public readonly PROSTATE_SCREENING = 'prostate-screening';
  public readonly DIAGNOSIS_TREATMENT = 'diagnosis-treatment';
  public readonly BEST_CHOICE = 'best-choice';

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public naviagteToModule(module: string): void {
    const navigationDetails: string[] = [];
    var routeTo = '';

    if(this.currentHref === 'title'){
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
      } else {
        //console.log('Backward Module: in Title');
      }
    }

    console.log("naviagteToModule/outside if | currentHref -> " + this.currentHref);
    if (this.currentHref === 'credits') {
      console.log("naviagteToModule/in if | currentHref -> " + this.currentHref);
      if (module === this.PROSTATE_IMPORTANCE) {
        routeTo = this.RISK_SYMPTOMS;
      } else if (module === this.RISK_SYMPTOMS) {
        routeTo = this.PROSTATE_SCREENING;
      } else if (module === this.PROSTATE_SCREENING) {
        routeTo = this.DIAGNOSIS_TREATMENT;
      } else if (module === this.DIAGNOSIS_TREATMENT) {
        routeTo = this.BEST_CHOICE;
      } else if (module === this.BEST_CHOICE) {
        //console.log('BEST_CHOICE: In Else for Credits');
        //hide next button
      } else {
        //console.log('Forward Module: in Credits');
      }
    }

    navigationDetails.push(routeTo);
    this.router.navigate(navigationDetails);
  }

  public nextButton(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        console.log("nextButton | this.PROSTATE_IMPORTANCE " + module);
        this.nextModuleTab(module);
        break;
      case this.RISK_SYMPTOMS:
        this.nextModuleTab(module);
        break;
      case this.PROSTATE_SCREENING:
      this.nextModuleTab(module); 
      break;
    }
  }

  public nextModuleTab(module: string = ''): void {

  

    //if moduleNavTab is prostateImportance, set to this.prostateImportanceModuleNavTab
    // switch (module) {
    //   case this.PROSTATE_IMPORTANCE:
        
    //   break;
      
    // }

    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        console.log("nextModuleTab | this.PROSTATE_IMPORTANCE " + module);
        console.log("this.currentHref !== this.prostateImportanceModuleNavTab[this.prostateImportanceModuleNavTab.length - 1].href  \n");
        console.log("\n");
        console.log(this.currentHref !== this.prostateImportanceModuleNavTab[this.prostateImportanceModuleNavTab.length - 1].href);
        if (this.currentHref !== this.prostateImportanceModuleNavTab[this.prostateImportanceModuleNavTab.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.prostateImportanceModuleNavTab.findIndex((h) => h.href === currHref);

          this.currentHref = this.prostateImportanceModuleNavTab[i + 1].href!;
          this.currentTab = this.prostateImportanceModuleNavTab[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          console.log("nextModuleTab/outside if | currentHref -> " + this.currentHref);
          if (this.currentHref === 'credits') {
            console.log("nextModuleTab/in if | currentHref -> " + this.currentHref);
            this.naviagteToModule(module);
          }
        } else {
          if (this.currentHref === 'credits') {
            console.log("nextModuleTab/in if | currentHref -> " + this.currentHref);
            this.naviagteToModule(module);
          }
        }
        break;
      case this.RISK_SYMPTOMS:
        if (this.currentHref !== this.risksSymptomsModuleNaveTab[this.risksSymptomsModuleNaveTab.length - 1].href) {
          const currHref = this.currentHref;
          const i = this.risksSymptomsModuleNaveTab.findIndex((h) => h.href === currHref);

          this.currentHref = this.risksSymptomsModuleNaveTab[i + 1].href!;
          this.currentTab = this.risksSymptomsModuleNaveTab[i + 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
    
          if (this.currentHref === 'credits') {
            this.naviagteToModule(module);
          }
        }
        break;
        case this.PROSTATE_SCREENING:
          if (this.currentHref !== this.prostateScreeningModuleNavTab[this.prostateScreeningModuleNavTab.length - 1].href) {
            const currHref = this.currentHref;
            const i = this.prostateScreeningModuleNavTab.findIndex((h) => h.href === currHref);
  
            this.currentHref = this.prostateScreeningModuleNavTab[i + 1].href!;
            this.currentTab = this.prostateScreeningModuleNavTab[i + 1].tab!;
            this.isActive = true;
            this.setHrefTab(this.currentHref, this.currentTab);
      
            let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
            element.click();
      
            if (this.currentHref === 'credits') {
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
    }
  }

  public previousModuleTab(module: string = ''): void {
    switch (module) {
      case this.PROSTATE_IMPORTANCE:
        if (this.currentHref !== this.prostateImportanceModuleNavTab[0].href) {
          const currHref = this.currentHref;
          const i = this.prostateImportanceModuleNavTab.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.prostateImportanceModuleNavTab[i - 1].href!;
          this.currentTab = this.prostateImportanceModuleNavTab[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.prostateImportanceModuleNavTab[0].href){
          this.naviagteToModule(module);
        }
        break;
      case this.RISK_SYMPTOMS:
        if (this.currentHref !== this.risksSymptomsModuleNaveTab[0].href) {
          const currHref = this.currentHref;
          const i = this.risksSymptomsModuleNaveTab.findIndex((h) => h.href === currHref);
    
          this.currentHref = this.risksSymptomsModuleNaveTab[i - 1].href!;
          this.currentTab = this.risksSymptomsModuleNaveTab[i - 1].tab!;
          this.isActive = true;
          this.setHrefTab(this.currentHref, this.currentTab);
    
          let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
          element.click();
        } else if(this.currentHref == this.risksSymptomsModuleNaveTab[0].href) {
          this.naviagteToModule(module);
        }
        break;
        case this.PROSTATE_SCREENING:
          if (this.currentHref !== this.prostateScreeningModuleNavTab[0].href) {
            const currHref = this.currentHref;
            const i = this.prostateScreeningModuleNavTab.findIndex((h) => h.href === currHref);
      
            this.currentHref = this.prostateScreeningModuleNavTab[i - 1].href!;
            this.currentTab = this.prostateScreeningModuleNavTab[i - 1].tab!;
            this.isActive = true;
            this.setHrefTab(this.currentHref, this.currentTab);
      
            let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
            element.click();
          } else if(this.currentHref == this.prostateScreeningModuleNavTab[0].href) {
            this.naviagteToModule(module);
          }
          break;
    }
  }

  public setHrefTab(href: string, tab: string): void {
    this.currentHref = href;
    this.currentTab = tab;

    console.log("setHrefTab | currentHref -> " + this.currentHref);
    console.log("setHrefTab | currentTab -> " + this.currentTab);
  }
}