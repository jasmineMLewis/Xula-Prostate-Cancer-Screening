import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-none',
  templateUrl: './symptoms-none.component.html',
  styleUrls: ['./symptoms-none.component.css']
})
export class SymptomsNoneComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/risks-symptoms/learn-symptoms/no-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
