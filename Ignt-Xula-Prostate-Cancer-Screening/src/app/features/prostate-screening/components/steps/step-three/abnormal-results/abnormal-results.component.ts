import { Component } from '@angular/core';

@Component({
  selector: 'abnormal-results',
  templateUrl: './abnormal-results.component.html',
  styleUrls: ['./abnormal-results.component.css']
})
export class AbnormalResultsComponent {
  public abnormalResultsAudio: any;
  public prostatitisAudio: any;

  constructor() {
    this.abnormalResultsAudio = new Audio();
    this.prostatitisAudio = new Audio();
   }

  ngOnInit(): void {
  }

  public abnormalResultsPlay(): void {
    this.abnormalResultsAudio.src = "/assets/audio/prostate-screening/steps/step-three-abnormal-results.mp3";
    this.abnormalResultsAudio.load();
    this.abnormalResultsAudio.play();
  }

  public abnormalResultsStop(): void {
    this.abnormalResultsAudio.pause();
  }

  public prostatitisPlay(): void {
    this.prostatitisAudio.src= "/assets/audio/prostate-screening/steps/step-three-prostatitis.mp3";
    this.prostatitisAudio.load();
    this.prostatitisAudio.play();
  }

  public prostatitisStop(): void {
    this.prostatitisAudio.pause();
  }
}
