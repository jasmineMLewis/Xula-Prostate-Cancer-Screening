import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'urine-related',
  templateUrl: './urine-related.component.html',
  styleUrls: ['./urine-related.component.css']
})
export class UrineRelatedComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/prostate-importance/symptoms/urine-related.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
