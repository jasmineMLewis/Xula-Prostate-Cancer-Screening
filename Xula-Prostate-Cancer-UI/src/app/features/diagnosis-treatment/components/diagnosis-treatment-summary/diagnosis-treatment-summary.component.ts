import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diagnosis-treatment-summary',
  templateUrl: './diagnosis-treatment-summary.component.html',
  styleUrls: ['./diagnosis-treatment-summary.component.css']
})
export class DiagnosisTreatmentSummaryComponent implements OnInit {
  public diagnosisTreatmentSummaryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosisTreatmentSummaryAudio = new Audio();
  }
  
  public diagnosisTreatmentSummaryPlay(): void {
    this.diagnosisTreatmentSummaryAudio.src = 
      "/assets/audio/features/diagnosis-treatment/diagnosis-treatment-summary/diagnosis-treatment-summary.mp3";
    this.diagnosisTreatmentSummaryAudio.load();
    this.diagnosisTreatmentSummaryAudio.play();
  }

  public diagnosisTreatmentSummaryStop(): void {
    this.diagnosisTreatmentSummaryAudio.pause();
  }
}
