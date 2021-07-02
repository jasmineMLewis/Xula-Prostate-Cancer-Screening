import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'discussing-results',
  templateUrl: './discussing-results.component.html',
  styleUrls: ['./discussing-results.component.css']
})
export class DiscussingResultsComponent implements OnInit {
  public densityPsaAudio: any;
  public discussingResultsAudio: any;
  public freePsaAudio: any;
  public velocityPsaAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.densityPsaAudio = new Audio();
    this.discussingResultsAudio = new Audio();
    this.freePsaAudio = new Audio();
    this.velocityPsaAudio = new Audio();
  }

  public densityPsaPlay(): void {
    this.densityPsaAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-threee-density-psa.mp3";
    this.densityPsaAudio.load();
    this.densityPsaAudio.play();
  }

  public densityPsaStop(): void {
    this.densityPsaAudio.pause();
  }
  
  public discussingResultsPlay(): void {
    this.discussingResultsAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-three-discussing-results.mp3";
    this.discussingResultsAudio.load();
    this.discussingResultsAudio.play();
  }

  public discussingResultsStop(): void {
    this.discussingResultsAudio.pause();
  }

  public freePsaAudioPlay(): void {
    this.freePsaAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-threee-free-psa.mp3";
    this.freePsaAudio.load();
    this.freePsaAudio.play();
  }

  public freePsaAudioStop(): void {
    this.freePsaAudio.pause();
  }

  public velocityPsaAudioPlay(): void {
    this.velocityPsaAudio.src = "/assets/audio/features/prostate-screening/steps-involved/step-threee-velocity-psa.mp3";
    this.velocityPsaAudio.load();
    this.velocityPsaAudio.play();
  }

  public velocityPsaAudioStop(): void {
    this.velocityPsaAudio.pause();
  }
}
