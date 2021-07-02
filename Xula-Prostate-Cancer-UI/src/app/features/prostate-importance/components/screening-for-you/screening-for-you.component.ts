import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screening-for-you',
  templateUrl: './screening-for-you.component.html',
  styleUrls: ['./screening-for-you.component.css']
})
export class ScreeningForYouComponent implements OnInit {
  public screeningForYouAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.screeningForYouAudio = new Audio();
  }
  
  public screeningForYouPlay(): void {
    this.screeningForYouAudio.src = "/assets/audio/features/prostate-importance/screening-for-you/screening-for-you.mp3";
    this.screeningForYouAudio.load();
    this.screeningForYouAudio.play();
  }

  public screeningForYouStop(): void {
    this.screeningForYouAudio.pause();
  }
}
