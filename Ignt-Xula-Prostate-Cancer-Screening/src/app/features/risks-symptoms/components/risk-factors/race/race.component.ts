import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  public raceAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.raceAudio = new Audio();
  }
  
  public raceAudioPlay(): void {
    this.raceAudio.src = "/assets/audio/risks-symptoms/risk-factors/race.mp3";
    this.raceAudio.load();
    this.raceAudio.play();
  }

  public raceAudioStop(): void {
    this.raceAudio.pause();
  }
}
