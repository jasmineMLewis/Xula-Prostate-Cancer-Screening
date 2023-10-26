import { Component } from '@angular/core';

@Component({
  selector: 'risk-symptoms-preferences',
  templateUrl: './risk-symptoms-preferences.component.html',
  styleUrls: ['./risk-symptoms-preferences.component.css']
})
export class RiskSymptomsPreferencesComponent {
  public riskSymptomsPreferencesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.riskSymptomsPreferencesAudio = new Audio();
  }
  
  public riskSymptomsPreferencesPlay(): void {
    this.riskSymptomsPreferencesAudio.src = "/assets/audio/risks-symptoms/risk-symptoms-preferences/risk-symptoms-preferences.mp3";
    this.riskSymptomsPreferencesAudio.load();
    this.riskSymptomsPreferencesAudio.play();
  }

  public riskSymptomsPreferencesStop(): void {
    this.riskSymptomsPreferencesAudio.pause();
  }
}
