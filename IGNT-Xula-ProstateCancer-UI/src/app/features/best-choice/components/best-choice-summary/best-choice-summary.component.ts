import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-choice-summary',
  templateUrl: './best-choice-summary.component.html',
  styleUrls: ['./best-choice-summary.component.css']
})
export class BestChoiceSummaryComponent implements OnInit {
  public bestChoiceSummaryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoiceSummaryAudio = new Audio();
  }
  
  public bestChoiceSummaryPlay(): void {
    this.bestChoiceSummaryAudio.src = "/assets/audio/features/best-choice/best-choice-summary/best-choice-summary.mp3";
    this.bestChoiceSummaryAudio.load();
    this.bestChoiceSummaryAudio.play();
  }

  public bestChoiceSummaryStop(): void {
    this.bestChoiceSummaryAudio.pause();
  }
}
