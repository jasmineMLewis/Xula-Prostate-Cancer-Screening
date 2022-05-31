import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-problem-never',
  templateUrl: './treatment-problem-never.component.html',
  styleUrls: ['./treatment-problem-never.component.css']
})
export class TreatmentProblemNeverComponent implements OnInit {
  public treatmentProblemNeverAudio: any;
  public tumorAudio: any;

  constructor() {
    this.treatmentProblemNeverAudio = new Audio();
    this.tumorAudio = new Audio();
   }

  ngOnInit(): void {
  }

  public treatmentProblemNeverPlay(): void {
    this.treatmentProblemNeverAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/prostate-tumor-problem-never.mp3";
    this.treatmentProblemNeverAudio.load();
    this.treatmentProblemNeverAudio.play();
  }

  public treatmentProblemNeverStop(): void {
    this.treatmentProblemNeverAudio.pause();
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
