import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cancer-screening',
  templateUrl: './cancer-screening.component.html',
  styleUrls: ['./cancer-screening.component.css']
})
export class CancerScreeningComponent implements OnInit {
  public cancerScreeningAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.cancerScreeningAudio = new Audio();
  }
  
  public cancerScreeningPlay(): void {
    this.cancerScreeningAudio.src = "/assets/audio/features/prostate-screening/screening/cancer-screening.mp3";
    this.cancerScreeningAudio.load();
    this.cancerScreeningAudio.play();
  }

  public cancerScreeningStop(): void {
    this.cancerScreeningAudio.pause();
  }
}
