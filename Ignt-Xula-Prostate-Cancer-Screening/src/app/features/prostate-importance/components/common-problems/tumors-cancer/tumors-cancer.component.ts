import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tumors-cancer',
  templateUrl: './tumors-cancer.component.html',
  styleUrls: ['./tumors-cancer.component.css']
})
export class TumorsCancerComponent implements OnInit {
  public tumorCancerAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.tumorCancerAudio = new Audio();
  }

  public tumorCancerPlay(): any {
    this.tumorCancerAudio.src = "/assets/audio/prostate-importance/common-problems/tumors-cancer.mp3";
    this.tumorCancerAudio.load();
    this.tumorCancerAudio.play();
  }

  public tumorCancerStop(): any {
    this.tumorCancerAudio.pause();
  }
}
