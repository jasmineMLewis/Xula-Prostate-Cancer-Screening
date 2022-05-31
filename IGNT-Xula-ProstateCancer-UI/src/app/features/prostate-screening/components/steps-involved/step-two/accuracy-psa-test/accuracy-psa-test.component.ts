import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accuracy-psa-test',
  templateUrl: './accuracy-psa-test.component.html',
  styleUrls: ['./accuracy-psa-test.component.css']
})
export class AccuracyPsaTestComponent implements OnInit {
  public accuracyPsaTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.accuracyPsaTestAudio = new Audio();
  }
  
  public accuracyPsaTestPlay(): void {
    this.accuracyPsaTestAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-two-accuracy-psa-test.mp3";
    this.accuracyPsaTestAudio.load();
    this.accuracyPsaTestAudio.play();
  }

  public accuracyPsaTestStop(): void {
    this.accuracyPsaTestAudio.pause();
  }
}
