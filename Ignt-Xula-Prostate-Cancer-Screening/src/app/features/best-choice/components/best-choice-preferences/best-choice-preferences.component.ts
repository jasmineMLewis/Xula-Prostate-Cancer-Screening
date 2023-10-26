import { Component } from '@angular/core';

@Component({
  selector: 'best-choice-preferences',
  templateUrl: './best-choice-preferences.component.html',
  styleUrls: ['./best-choice-preferences.component.css']
})
export class BestChoicePreferencesComponent {
  public bestChoicePreferencesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoicePreferencesAudio = new Audio();
  }
  
  public bestChoicePreferencesPlay(): void {
    this.bestChoicePreferencesAudio.src = 
      "/assets/audio/best-choice/best-choice-preferences/best-choice-preferences.mp3";
    this.bestChoicePreferencesAudio.load();
    this.bestChoicePreferencesAudio.play();
  }

  public bestChoicePreferencesStop(): void {
    this.bestChoicePreferencesAudio.pause();
  }
}
