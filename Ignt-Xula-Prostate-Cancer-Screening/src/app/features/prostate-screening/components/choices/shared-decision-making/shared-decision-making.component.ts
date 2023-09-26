import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-decision-making',
  templateUrl: './shared-decision-making.component.html',
  styleUrls: ['./shared-decision-making.component.css']
})
export class SharedDecisionMakingComponent implements OnInit {
  public sharedDecisionMakingAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.sharedDecisionMakingAudio = new Audio();
  }
  
  public sharedDecisionMakingPlay(): void {
    this.sharedDecisionMakingAudio.src = "/assets/audio/prostate-screening/choice/shared-decision-making.mp3";
    this.sharedDecisionMakingAudio.load();
    this.sharedDecisionMakingAudio.play();
  }

  public sharedDecisionMakingStop(): void {
    this.sharedDecisionMakingAudio.pause();
  }
}
