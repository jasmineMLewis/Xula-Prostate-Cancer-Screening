import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'steps-home',
  templateUrl: './steps-home.component.html',
  styleUrls: ['./steps-home.component.css']
})
export class StepsHomeComponent implements OnInit {
  public stepsHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.stepsHomeAudio = new Audio();
  }
  
  public stepsHomePlay(): void {
    this.stepsHomeAudio.src = 
      "/assets/audio/features/prostate-screening/steps-involved/steps-home.mp3";
    this.stepsHomeAudio.load();
    this.stepsHomeAudio.play();
  }

  public stepsHomeStop(): void {
    this.stepsHomeAudio.pause();
  }
}
