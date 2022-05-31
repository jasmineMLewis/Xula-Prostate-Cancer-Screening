import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screening-for-cancer',
  templateUrl: './screening-for-cancer.component.html',
  styleUrls: ['./screening-for-cancer.component.css']
})
export class ScreeningForCancerComponent implements OnInit {
  public screeningForCancerAudio: any;
  public psaImpactStudiesAudio:  any;

  constructor() { }

  ngOnInit(): void {
    this.screeningForCancerAudio = new Audio();
    this.psaImpactStudiesAudio = new Audio();
  }
  
  public psaImpactStudiesPlay(): void {
    this.psaImpactStudiesAudio.src = "/assets/audio/features/prostate-screening/screening/psa-impact-studies.mp3";
    this.psaImpactStudiesAudio.load();
    this.psaImpactStudiesAudio.play();
  }

  public psaImpactStudiesStop(): void {
    this.psaImpactStudiesAudio.pause();
  }

  public screeningForCancerPlay(): void {
    this.screeningForCancerAudio.src = "/assets/audio/features/prostate-screening/screening/screening-for-cancer.mp3";
    this.screeningForCancerAudio.load();
    this.screeningForCancerAudio.play();
  }

  public screeningForCancerStop(): void {
    this.screeningForCancerAudio.pause();
  }
}
