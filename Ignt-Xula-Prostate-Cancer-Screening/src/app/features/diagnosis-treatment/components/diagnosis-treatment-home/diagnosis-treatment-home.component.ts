import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diagnosis-treatment-home',
  templateUrl: './diagnosis-treatment-home.component.html',
  styleUrls: ['./diagnosis-treatment-home.component.css']
})
export class DiagnosisTreatmentHomeComponent implements OnInit {
  public diagnosisTreatmentHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosisTreatmentHomeAudio = new Audio();
  }
  
  public diagnosisTreatmentHomePlay(): void {
    this.diagnosisTreatmentHomeAudio.src = 
      "/assets/audio/diagnosis-treatment/diagnosis-treatment-home/diagnosis-treatment-home.mp3";
    this.diagnosisTreatmentHomeAudio.load();
    this.diagnosisTreatmentHomeAudio.play();
  }

  public diagnosisTreatmentHomeStop(): void {
    this.diagnosisTreatmentHomeAudio.pause();
  }
}
