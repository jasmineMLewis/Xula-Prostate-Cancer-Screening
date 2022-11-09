import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abnormal-reasons',
  templateUrl: './abnormal-reasons.component.html',
  styleUrls: ['./abnormal-reasons.component.css']
})
export class AbnormalReasonsComponent implements OnInit {
  public abnormalReasonsAudio: any;
  public prostatitisAudio: any;

  constructor() {
    this.abnormalReasonsAudio = new Audio();
    this.prostatitisAudio = new Audio();
   }

  ngOnInit(): void {
  }

  public abnormalReasonsPlay(): void {
    this.abnormalReasonsAudio.src = "/assets/audio/prostate-screening/steps/step-three-abnormal-reasons.mp3";
    this.abnormalReasonsAudio.load();
    this.abnormalReasonsAudio.play();
  }

  public abnormalReasonsStop(): void {
    this.abnormalReasonsAudio.pause();
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
