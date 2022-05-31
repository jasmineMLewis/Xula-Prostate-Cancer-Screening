import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abnormal-urologist',
  templateUrl: './abnormal-urologist.component.html',
  styleUrls: ['./abnormal-urologist.component.css']
})
export class AbnormalUrologistComponent implements OnInit {
  public abnormalUrologistAudio: any;
  public urologistAudio: any;

  constructor() {
    this.abnormalUrologistAudio = new Audio();
    this.urologistAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public abnormalUrologistPlay(): void {
    this.abnormalUrologistAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-three-abnormal-urologist.mp3";
    this.abnormalUrologistAudio.load();
    this.abnormalUrologistAudio.play();
  }

  public abnormalUrologistStop(): void {
    this.abnormalUrologistAudio.pause();
  }

  public urologistPlay(): void {
    this.urologistAudio.src ="/assets/audio/features/prostate-screening/steps-involved/step-three-urologist.mp3";
    this.urologistAudio.load();
    this.urologistAudio.play();
  }

  public urologistStop(): void {
    this.urologistAudio.pause();
  }
}
