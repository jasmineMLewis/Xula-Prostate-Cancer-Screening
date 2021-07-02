import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.css']
})
export class FamilyHistoryComponent implements OnInit {
  public familyHistoryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.familyHistoryAudio = new Audio();
  }
  
  public familyHistoryAudioPlay(): void {
    this.familyHistoryAudio.src = "/assets/audio/features/risks-symptoms/risk-factors/family-history.mp3";
    this.familyHistoryAudio.load();
    this.familyHistoryAudio.play();
  }

  public familyHistoryAudioStop(): void {
    this.familyHistoryAudio.pause();
  }

}
