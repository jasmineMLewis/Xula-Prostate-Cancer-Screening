import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-the-results',
  templateUrl: './get-the-results.component.html',
  styleUrls: ['./get-the-results.component.css']
})
export class GetTheResultsComponent implements OnInit {
  public getTheResultsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.getTheResultsAudio = new Audio();
  }
  
  public getTheResultsPlay(): void {
    this.getTheResultsAudio.src = "/assets/audio/prostate-screening/steps/step-two-get-the-results.mp3";
    this.getTheResultsAudio.load();
    this.getTheResultsAudio.play();
  }

  public getTheResultsStop(): void {
    this.getTheResultsAudio.pause();
  }
}
