import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screening-test',
  templateUrl: './screening-test.component.html',
  styleUrls: ['./screening-test.component.css']
})
export class ScreeningTestComponent implements OnInit {
  public screeningTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.screeningTestAudio = new Audio();
  }
  
  public screeningTestPlay(): void {
    this.screeningTestAudio.src = "/assets/audio/prostate-screening/screening/screening-test.mp3";
    this.screeningTestAudio.load();
    this.screeningTestAudio.play();
  }

  public screeningTestStop(): void {
    this.screeningTestAudio.pause();
  }
}
