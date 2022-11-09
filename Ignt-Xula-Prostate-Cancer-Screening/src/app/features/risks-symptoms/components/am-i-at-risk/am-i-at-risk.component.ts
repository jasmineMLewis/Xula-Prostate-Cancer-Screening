import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-i-at-risk',
  templateUrl: './am-i-at-risk.component.html',
  styleUrls: ['./am-i-at-risk.component.css']
})
export class AmIAtRiskComponent implements OnInit {
  public amIAtRiskAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.amIAtRiskAudio = new Audio();
  }
  
  public amIAtRiskPlay(): void {
    this.amIAtRiskAudio.src = "/assets/audio/risks-symptoms/am-i-at-risk/am-i-at-risk.mp3";
    this.amIAtRiskAudio.load();
    this.amIAtRiskAudio.play();
  }

  public amIAtRiskStop(): void {
    this.amIAtRiskAudio.pause();
  }
}
