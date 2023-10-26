import { Component } from '@angular/core';

@Component({
  selector: 'prostate-screening-preferences',
  templateUrl: './prostate-screening-preferences.component.html',
  styleUrls: ['./prostate-screening-preferences.component.css']
})
export class ProstateScreeningPreferencesComponent {
  public prostateScreeningPreferencesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateScreeningPreferencesAudio = new Audio();
  }
  
  public prostateScreeningPreferencesPlay(): void {
    this.prostateScreeningPreferencesAudio.src = 
      "/assets/audio/prostate-screening/prostate-screening-preferences/prostate-screening-preferences.mp3";
    this.prostateScreeningPreferencesAudio.load();
    this.prostateScreeningPreferencesAudio.play();
  }

  public prostateScreeningPreferencesStop(): void {
    this.prostateScreeningPreferencesAudio.pause();
  }
}
