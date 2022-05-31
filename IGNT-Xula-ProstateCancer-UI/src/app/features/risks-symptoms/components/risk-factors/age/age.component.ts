import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  public ageAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.ageAudio = new Audio();
  }
  
  public ageAudioPlay(): void {
    this.ageAudio.src = "/assets/audio/features/risks-symptoms/risk-factors/age.mp3";
    this.ageAudio.load();
    this.ageAudio.play();
  }

  public ageAudioStop(): void {
    this.ageAudio.pause();
  }
}
