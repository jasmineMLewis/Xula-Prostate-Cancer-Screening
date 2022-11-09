import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-may-be-some-problem',
  templateUrl: './treatment-may-be-some-problem.component.html',
  styleUrls: ['./treatment-may-be-some-problem.component.css']
})
export class TreatmentMayBeSomeProblemComponent implements OnInit {
  public treatmentMayBeSomeProblemAudio: any;
  public waysToMeasureTumorAudio: any;
  
  constructor() {
    this.treatmentMayBeSomeProblemAudio = new Audio();
    this.waysToMeasureTumorAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public treatmentMayBeSomeProblemPlay(): void {
    this.treatmentMayBeSomeProblemAudio.src = "/assets/audio/diagnosis-treatment/treatment/prostate-tumor-may-be-some-problem.mp3";
    this.treatmentMayBeSomeProblemAudio.load();
    this.treatmentMayBeSomeProblemAudio.play();
  }

  public treatmentMayBeSomeProblemStop(): void {
    this.treatmentMayBeSomeProblemAudio.pause();
  }

  public waysToMeasureTumorPlay(): void {
    this.waysToMeasureTumorAudio.src = "/assets/audio/diagnosis-treatment/treatment/ways-to-measure-tumor.mp3";
    this.waysToMeasureTumorAudio.load();
    this.waysToMeasureTumorAudio.play();
  }

  public waysToMeasureTumorStop(): void {
    this.waysToMeasureTumorAudio.pause();
  }
}
