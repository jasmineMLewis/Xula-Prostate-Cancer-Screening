import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'active-treatment',
  templateUrl: './active-treatment.component.html',
  styleUrls: ['./active-treatment.component.css']
})
export class ActiveTreatmentComponent implements OnInit {
  public activeTreatmentAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.activeTreatmentAudio = new Audio();
  }

  public activeTreatmentPlay(): void {
    this.activeTreatmentAudio.src = "/assets/audio/diagnosis-treatment/decision/active-treatment.mp3";
    this.activeTreatmentAudio.load();
    this.activeTreatmentAudio.play();
  }

  public activeTreatmentStop(): void {
    this.activeTreatmentAudio.pause();
  }
}
