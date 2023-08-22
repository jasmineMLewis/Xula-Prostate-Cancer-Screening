import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-importance',
  templateUrl: './prostate-importance.component.html',
  styleUrls: ['./prostate-importance.component.css']
})
export class ProstateImportanceComponent implements OnInit {

  ngOnInit(): void {  }

  // public hrefs = [
  //   'title',
  //   'prostate',
  //   'commonProblem',
  //   'symptoms',
  //   'visit',
  //   'prostateExam',
  //   'bestChoiceQuestionnaire',
  //   'summary',
  //   'credits',
  // ];
  // public tabs = [
  //   'titleTab',
  //   'prostateTab',
  //   'commonProblemTab',
  //   'symptomsTab',
  //   'visitTab',
  //   'prostateExamTab',
  //   'bestChoiceQuestionnaireTab',
  //   'summaryTab',
  //   'creditsTab',
  // ];

  // public currentHref: string = 'title';
  // public currentTab: string = 'titleTab';
  // public isActive = false;
  // public isNextButtonVisible = false;
  // public isPreviousButtonVisible = false;

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

  //     console.log("i " + i);
  //     this.currentHref = this.hrefs[i + 1];
  //     this.currentTab = this.tabs[i + 1];
  //     this.isActive = true;

  //     this.setHrefTab(this.currentHref, this.currentTab);
  //     this.displayNextButton(); 
  //     this.displayPreviousButton();

  //      let element: HTMLElement = document.getElementById(this.currentTab) as HTMLElement;
  //      element.click();
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

  //  this.displayPreviousButton();
  //  this.displayNextButton();
  // }
}