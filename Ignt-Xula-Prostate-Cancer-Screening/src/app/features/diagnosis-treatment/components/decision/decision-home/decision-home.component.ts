import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decision-home',
  templateUrl: './decision-home.component.html',
  styleUrls: ['./decision-home.component.css']
})
export class DecisionHomeComponent implements OnInit {
  public decisionHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.decisionHomeAudio = new Audio();
  }

  public decisionHomePlay(): void {
    this.decisionHomeAudio.src = "/assets/audio/diagnosis-treatment/decision/decision-home.mp3";
    this.decisionHomeAudio.load();
    this.decisionHomeAudio.play();
  }

  public decisionHomeStop(): void {
    this.decisionHomeAudio.pause();
  }
}
