import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diagnosis-treatment-prostate-cancer',
  templateUrl: './diagnosis-treatment-prostate-cancer.component.html',
  styleUrls: ['./diagnosis-treatment-prostate-cancer.component.css']
})
export class DiagnosisTreatmentProstateCancerComponent implements OnInit {
  public diagnosisTreatmentProstateCancerAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosisTreatmentProstateCancerAudio = new Audio();
  }
  
  public diagnosisTreatmentProstateCancerPlay(): void {
    this.diagnosisTreatmentProstateCancerAudio.src = 
      "/assets/audio/features/diagnosis-treatment/diagnosis-treatment-prostate-cancer/diagnosis-treatment-prostate-cancer.mp3";
    this.diagnosisTreatmentProstateCancerAudio.load();
    this.diagnosisTreatmentProstateCancerAudio.play();
  }

  public diagnosisTreatmentProstateCancerStop(): void {
    this.diagnosisTreatmentProstateCancerAudio.pause();
  }
}
