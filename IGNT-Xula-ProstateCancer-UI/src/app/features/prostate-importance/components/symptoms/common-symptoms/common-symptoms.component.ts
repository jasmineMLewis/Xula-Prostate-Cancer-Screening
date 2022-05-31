import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-symptoms',
  templateUrl: './common-symptoms.component.html',
  styleUrls: ['./common-symptoms.component.css']
})
export class CommonSymptomsComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/features/prostate-importance/symptoms/common-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
