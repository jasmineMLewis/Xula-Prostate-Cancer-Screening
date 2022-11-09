import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-other',
  templateUrl: './symptoms-other.component.html',
  styleUrls: ['./symptoms-other.component.css']
})
export class SymptomsOtherComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/risks-symptoms/learn-symptoms/other-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
