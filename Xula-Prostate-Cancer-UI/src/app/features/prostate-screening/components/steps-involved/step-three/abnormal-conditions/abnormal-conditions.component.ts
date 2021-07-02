import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abnormal-conditions',
  templateUrl: './abnormal-conditions.component.html',
  styleUrls: ['./abnormal-conditions.component.css']
})
export class AbnormalConditionsComponent implements OnInit {
  public abnormalConditionsAudio: any;
  public prostatitisAudio: any;

  constructor() {
    this.abnormalConditionsAudio = new Audio();
    this.prostatitisAudio = new Audio();
   }

  ngOnInit(): void {
  }

  public abnormalConditionsPlay(): void {
    this.abnormalConditionsAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-three-abnormal-condiitions.mp3";
    this.abnormalConditionsAudio.load();
    this.abnormalConditionsAudio.play();
  }

  public abnormalConditionsStop(): void {
    this.abnormalConditionsAudio.pause();
  }

  public prostatitisPlay(): void {
    this.prostatitisAudio.src= "/assets/audio/features/prostate-screening/steps-involved/step-three-prostatitis.mp3";
    this.prostatitisAudio.load();
    this.prostatitisAudio.play();
  }

  public prostatitisStop(): void {
    this.prostatitisAudio.pause();
  }
}
