import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-any',
  templateUrl: './symptoms-any.component.html',
  styleUrls: ['./symptoms-any.component.css']
})
export class SymptomsAnyComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/features/risks-symptoms/learn-symptoms/any-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
