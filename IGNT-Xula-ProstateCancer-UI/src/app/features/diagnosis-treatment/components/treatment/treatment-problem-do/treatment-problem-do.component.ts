import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-problem-do',
  templateUrl: './treatment-problem-do.component.html',
  styleUrls: ['./treatment-problem-do.component.css']
})
export class TreatmentProblemDoComponent implements OnInit {
  public treatmentProblemDoAudio: any;
  public tumorAudio: any;

  constructor() {
    this.treatmentProblemDoAudio = new Audio();
    this.tumorAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public treatmentProblemDoPlay(): void {
    this.treatmentProblemDoAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/prostate-tumor-problem-do.mp3";
    this.treatmentProblemDoAudio.load();
    this.treatmentProblemDoAudio.play();
  }

  public treatmentProblemDoStop(): void {
    this.treatmentProblemDoAudio.pause();
  }

  public tumorPlay(): void {
    this.tumorAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/tumor.mp3";
    this.tumorAudio.load();
    this.tumorAudio.play();
  }

  public tumorStop(): void {
    this.tumorAudio.pause();
  }

}
