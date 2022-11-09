import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-psa-test',
  templateUrl: './example-psa-test.component.html',
  styleUrls: ['./example-psa-test.component.css']
})
export class ExamplePsaTestComponent implements OnInit {
  public examplePsaTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.examplePsaTestAudio = new Audio();
  }
  
  public examplePsaTestPlay(): void {
    this.examplePsaTestAudio.src = "/assets/audio/prostate-screening/steps/step-two-example-psa-test.mp3";
    this.examplePsaTestAudio.load();
    this.examplePsaTestAudio.play();
  }

  public examplePsaTestStop(): void {
    this.examplePsaTestAudio.pause();
  }
}
