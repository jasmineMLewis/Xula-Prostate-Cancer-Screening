import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  public recommedationsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.recommedationsAudio = new Audio();
  }
  
  public recommedationsPlay(): void {
    this.recommedationsAudio.src = "/assets/audio/features/prostate-screening/recommendations/recommendations.mp3";
    this.recommedationsAudio.load();
    this.recommedationsAudio.play();
  }

  public recommedationsStop(): void {
    this.recommedationsAudio.pause();
  }
}
