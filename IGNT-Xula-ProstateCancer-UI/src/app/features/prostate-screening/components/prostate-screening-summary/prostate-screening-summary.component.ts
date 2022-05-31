import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-screening-summary',
  templateUrl: './prostate-screening-summary.component.html',
  styleUrls: ['./prostate-screening-summary.component.css']
})
export class ProstateScreeningSummaryComponent implements OnInit {
  public prostateScreeningSummaryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateScreeningSummaryAudio = new Audio();
  }
  
  public prostateScreeningSummaryPlay(): void {
    this.prostateScreeningSummaryAudio.src = 
      "/assets/audio/features/prostate-screening/prostate-screening-summary/prostate-screening-summary.mp3";
    this.prostateScreeningSummaryAudio.load();
    this.prostateScreeningSummaryAudio.play();
  }

  public prostateScreeningSummaryStop(): void {
    this.prostateScreeningSummaryAudio.pause();
  }
}
