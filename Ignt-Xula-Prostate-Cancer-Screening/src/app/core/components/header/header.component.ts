import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  public title: string = "Prostate Cancer Screening: Making the Best Choice";
  public home: string = "Home";
  public prostateImportance: string = "Prostate Importance";
  public risksSymptoms: string = "Risks & Symptoms";
  public prostateScreening: string ="Screening";
  public diagnosisTreatment: string = "Diagnosis & Treatment";
  public bestChoice: string = "Best Choice";

  constructor() { }

  ngOnInit(): void {
  }

}
