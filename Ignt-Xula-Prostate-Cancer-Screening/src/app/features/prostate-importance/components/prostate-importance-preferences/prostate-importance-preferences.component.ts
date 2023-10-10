import { Component } from '@angular/core';

@Component({
  selector: 'prostate-importance-preferences',
  templateUrl: './prostate-importance-preferences.component.html',
  styleUrls: ['./prostate-importance-preferences.component.css']
})
export class ProstateImportancePreferencesComponent {
  public prostateImportancePreferencesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateImportancePreferencesAudio = new Audio();
  }
  
  public prostateImportancePreferencesPlay(): void {
    this.prostateImportancePreferencesAudio.src = 
      "/assets/audio/prostate-importance/prostate-importance-preferences/prostate-importance-preferences.mp3";
    this.prostateImportancePreferencesAudio.load();
    this.prostateImportancePreferencesAudio.play();
  }

  public prostateImportancePreferencesStop(): void {
    this.prostateImportancePreferencesAudio.pause();
  }
}
