import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  public getTestedAudio: any;
  public prostateExamAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.getTestedAudio = new Audio();
    this.prostateExamAudio = new Audio();
  }
  
  public getTestedPlay(): void {
    this.getTestedAudio.src = "/assets/audio/prostate-screening/steps/step-one-get-tested.mp3";
    this.getTestedAudio.load();
    this.getTestedAudio.play();
  }

  public getTestedStop(): void {
    this.getTestedAudio.pause();
  }

  public prostateExamPlay(): void {
    this.prostateExamAudio.src = "/assets/audio/prostate-screening/steps/step-one-prostate-exam.mp3";
    this.prostateExamAudio.load();
    this.prostateExamAudio.play();
  }

  public prostateExamStop(): void {
    this.prostateExamAudio.pause();
  }
}
