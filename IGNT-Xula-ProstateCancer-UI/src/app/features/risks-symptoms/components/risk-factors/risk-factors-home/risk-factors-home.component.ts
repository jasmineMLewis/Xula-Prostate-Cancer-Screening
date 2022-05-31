import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'risk-factors-home',
  templateUrl: './risk-factors-home.component.html',
  styleUrls: ['./risk-factors-home.component.css']
})
export class RiskFactorsHomeComponent implements OnInit {
  public riskFactors: any;

  constructor() { }

  ngOnInit(): void {
    this.riskFactors = new Audio();
  }
  
  public riskFactorsHomePlay(): void {
    this.riskFactors.src = "/assets/audio/features/risks-symptoms/risk-factors/risk-factors-home.mp3";
    this.riskFactors.load();
    this.riskFactors.play();
  }

  public riskFactorsHomeStop(): void {
    this.riskFactors.pause();
  }
}
