import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'referral-to-urologist',
  templateUrl: './referral-to-urologist.component.html',
  styleUrls: ['./referral-to-urologist.component.css']
})
export class ReferralToUrologistComponent implements OnInit {
  public referralToUrologistAudio: any;
  public urologistAudio: any;

  constructor() {
    this.referralToUrologistAudio = new Audio();
    this.urologistAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public referralToUrologistPlay(): void {
    this.referralToUrologistAudio.src = "/assets/audio/prostate-screening/steps/step-three-referral-to-urologist.mp3";
    this.referralToUrologistAudio.load();
    this.referralToUrologistAudio.play();
  }

  public referralToUrologistStop(): void {
    this.referralToUrologistAudio.pause();
  }

  public urologistPlay(): void {
    this.urologistAudio.src ="/assets/audio/prostate-screening/steps/step-three-urologist.mp3";
    this.urologistAudio.load();
    this.urologistAudio.play();
  }

  public urologistStop(): void {
    this.urologistAudio.pause();
  }
}
