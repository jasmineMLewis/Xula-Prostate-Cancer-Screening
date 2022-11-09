import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'additional-tests-home',
  templateUrl: './additional-tests-home.component.html',
  styleUrls: ['./additional-tests-home.component.css']
})
export class AdditionalTestsHomeComponent implements OnInit {
  public additionalTestsHomeAudio: any;
  public urologistAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.additionalTestsHomeAudio = new Audio();
    this.urologistAudio = new Audio();
  }

  public additionalTestsHomePlay(): void {
    this.additionalTestsHomeAudio.src = "/assets/audio/diagnosis-treatment/additional-tests/additional-tests-home.mp3";
    this.additionalTestsHomeAudio.load();
    this.additionalTestsHomeAudio.play();
  }

  public additionalTestsHomeStop(): void {
    this.additionalTestsHomeAudio.pause();
  }

  public urologistPlay(): void {
    this.urologistAudio.src = "/assets/audio/diagnosis-treatment/additional-tests/urologist.mp3";
    this.urologistAudio.load();
    this.urologistAudio.play();
  }

  public urologistStop(): void {
    this.urologistAudio.pause();
  }
}
