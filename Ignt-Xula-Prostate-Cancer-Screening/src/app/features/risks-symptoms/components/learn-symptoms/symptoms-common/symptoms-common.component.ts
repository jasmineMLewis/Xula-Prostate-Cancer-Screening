import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-common',
  templateUrl: './symptoms-common.component.html',
  styleUrls: ['./symptoms-common.component.css']
})
export class SymptomsCommonComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/risks-symptoms/learn-symptoms/common-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
