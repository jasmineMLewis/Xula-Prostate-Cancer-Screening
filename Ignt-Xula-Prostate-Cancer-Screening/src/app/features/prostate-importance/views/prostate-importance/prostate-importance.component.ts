import { Component, OnInit } from '@angular/core';
import { FeatureMenuService } from '@core/services/feature-menu.service';

@Component({
  selector: 'prostate-importance',
  templateUrl: './prostate-importance.component.html',
  styleUrls: ['./prostate-importance.component.css'],
 providers: [FeatureMenuService]
})
export class ProstateImportanceComponent implements OnInit {

  constructor(public featuresMenuService: FeatureMenuService) {  }

  ngOnInit(): void {
  
  }


  // public hrefs = [
  //   'home',
  //   'prostate',
  //   'commonproblem',
  //   'symptoms',
  //   'visit',
  //   'prostateexam',
  //   'bestchoicequestionnaire',
  //   'summary',
  //   'credits',
  // ];
  // public tabs = [
  //   'hometab',
  //   'prostatetab',
  //   'commonproblemtab',
  //   'symptomstab',
  //   'visittab',
  //   'prostateexamtab',
  //   'bestchoicequestionnairetab',
  //   'summarytab',
  //   'creditstab',
  // ];

  // public currentHref: string = 'home';
  // public currentTab: string = 'hometab';
  // public isActive = false;
  // public isNextButtonVisible = false;
  // public isPreviousButtonVisible = false;

  // constructor() {  }

  // ngOnInit(): void {
  //    // this.displayNextButton();
  // }

  // public displayNextButton(): void {
  //   this.isNextButtonVisible = (this.currentHref === this.hrefs[8] || this.currentTab === this.tabs[8]) ? false : true;
  // }

  // public displayPreviousButton(): void {
  //   this.isPreviousButtonVisible = (this.currentHref === this.hrefs[0] || this.currentTab === this.tabs[0]) ? false : true;
  // }

  // public next(): void {
  //   if (this.currentHref !== this.hrefs[this.hrefs.length - 1]) {
  //     const currHref = this.currentHref;

  //     const i = this.hrefs.findIndex(function (el) {
  //       return el === currHref;
  //     });
  //     this.currentHref = this.hrefs[i + 1];
  //     this.currentTab = this.tabs[i + 1];
  //     this.isActive = true;

  //     this.setHrefTab(this.currentHref, this.currentTab);
  //     this.displayNextButton(); 
  //     this.displayPreviousButton();

  //     let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
  //     element.click();
  //   }
  // }

  // public previous(): void {
  //   if (this.currentHref !== this.hrefs[0]) {
  //       const currHref = this.currentHref;

  //       const i = this.hrefs.findIndex(function (el) {
  //           return el === currHref;
  //       });
  //       this.currentHref = this.hrefs[i - 1];
  //       this.currentTab = this.tabs[i - 1];
  //       this.isActive = true;

  //       this.setHrefTab(this.currentHref, this.currentTab);
  //       this.displayNextButton(); 
  //       this.displayPreviousButton();

  //       let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
  //       element.click();
  //   }
  // }

  // public setHrefTab(href: string, tab: string): void {
  //   this.currentHref = href;
  //   this.currentTab = tab;

  //   this.displayPreviousButton();
  //   this.displayNextButton();
  // }
}