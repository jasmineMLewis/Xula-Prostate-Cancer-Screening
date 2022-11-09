import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-home',
  templateUrl: './treatment-home.component.html',
  styleUrls: ['./treatment-home.component.css']
})
export class TreatmentHomeComponent implements OnInit {
  public treatmentHomeAudio: any;

  constructor() {
    this.treatmentHomeAudio = new Audio();
   }

  ngOnInit(): void {
  }

  public treatmentHomePlay(): void {
    this.treatmentHomeAudio.src = "/assets/audio/diagnosis-treatment/treatment/treatment-home.mp3";
    this.treatmentHomeAudio.load();
    this.treatmentHomeAudio.play();
  }

  public treatmentHomeStop(): void {
    this.treatmentHomeAudio.pause();
  }
}
