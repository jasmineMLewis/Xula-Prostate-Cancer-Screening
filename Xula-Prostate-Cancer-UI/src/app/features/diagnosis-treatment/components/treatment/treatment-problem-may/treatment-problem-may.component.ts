import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-problem-may',
  templateUrl: './treatment-problem-may.component.html',
  styleUrls: ['./treatment-problem-may.component.css']
})
export class TreatmentProblemMayComponent implements OnInit {
  public treatmentProblemMayAudio: any;
  public waysToMeasureTumorAudio: any;
  
  constructor() {
    this.treatmentProblemMayAudio = new Audio();
    this.waysToMeasureTumorAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public treatmentProblemMayPlay(): void {
    this.treatmentProblemMayAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/prostate-tumor-problem-may.mp3";
    this.treatmentProblemMayAudio.load();
    this.treatmentProblemMayAudio.play();
  }

  public treatmentProblemMayStop(): void {
    this.treatmentProblemMayAudio.pause();
  }

  public waysToMeasureTumorPlay(): void {
    this.waysToMeasureTumorAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/ways-to-measure-tumor.mp3";
    this.waysToMeasureTumorAudio.load();
    this.waysToMeasureTumorAudio.play();
  }

  public waysToMeasureTumorStop(): void {
    this.waysToMeasureTumorAudio.pause();
  }
}
