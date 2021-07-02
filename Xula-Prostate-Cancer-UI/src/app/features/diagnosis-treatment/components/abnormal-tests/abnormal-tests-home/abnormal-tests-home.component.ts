import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abnormal-tests-home',
  templateUrl: './abnormal-tests-home.component.html',
  styleUrls: ['./abnormal-tests-home.component.css']
})
export class AbnormalTestsHomeComponent implements OnInit {
  public abnormalTestsHomeAudio: any;
  public urologistAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.abnormalTestsHomeAudio = new Audio();
    this.urologistAudio = new Audio();
  }

  public abnormalTestsHomePlay(): void {
    this.abnormalTestsHomeAudio.src = "/assets/audio/features/diagnosis-treatment/abnormal-tests/abnormal-tests-home.mp3";
    this.abnormalTestsHomeAudio.load();
    this.abnormalTestsHomeAudio.play();
  }

  public abnormalTestsHomeStop(): void {
    this.abnormalTestsHomeAudio.pause();
  }

  public urologistPlay(): void {
    this.urologistAudio.src = "/assets/audio/features/diagnosis-treatment/abnormal-tests/urologist.mp3";
    this.urologistAudio.load();
    this.urologistAudio.play();
  }

  public urologistStop(): void {
    this.urologistAudio.pause();
  }
}
