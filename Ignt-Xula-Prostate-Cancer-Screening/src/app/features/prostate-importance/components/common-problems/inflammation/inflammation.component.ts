import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inflammation',
  templateUrl: './inflammation.component.html',
  styleUrls: ['./inflammation.component.css']
})
export class InflammationComponent implements OnInit {
  public antibioticAntiInflammatoryAudio: any;
  public inflammationAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.antibioticAntiInflammatoryAudio = new Audio();
    this.inflammationAudio = new Audio();
  }

  public antibioticAntiInflammatoryPlay(): any {
    this.antibioticAntiInflammatoryAudio.src = "/assets/audio/prostate-importance/common-problems/antibiotic-antiInflammatory.mp3";
    this.antibioticAntiInflammatoryAudio.load();
    this.antibioticAntiInflammatoryAudio.play();
  }

  public antibioticAntiInflammatoryStop(): any {
    this.antibioticAntiInflammatoryAudio.pause();
  }

  public inflammationPlay(): void {
    this.inflammationAudio.src = "/assets/audio/prostate-importance/common-problems/inflammation.mp3";
    this.inflammationAudio.load();
    this.inflammationAudio.play();
  }

  public inflammationStop(): void {
    this.inflammationAudio.pause();
  }
}
