import { Component } from '@angular/core';

@Component({
  selector: 'diagnosis-treatment-preferences',
  templateUrl: './diagnosis-treatment-preferences.component.html',
  styleUrls: ['./diagnosis-treatment-preferences.component.css']
})
export class DiagnosisTreatmentPreferencesComponent {
  public diagnosisTreatmentPreferencesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosisTreatmentPreferencesAudio = new Audio();
  }
  
  public diagnosisTreatmentPreferencesPlay(): void {
    this.diagnosisTreatmentPreferencesAudio.src = 
      "/assets/audio/diagnosis-treatment/diagnosis-treatment-preferences/diagnosis-treatment-preferences.mp3";
    this.diagnosisTreatmentPreferencesAudio.load();
    this.diagnosisTreatmentPreferencesAudio.play();
  }

  public diagnosisTreatmentPreferencesStop(): void {
    this.diagnosisTreatmentPreferencesAudio.pause();
  }
}
