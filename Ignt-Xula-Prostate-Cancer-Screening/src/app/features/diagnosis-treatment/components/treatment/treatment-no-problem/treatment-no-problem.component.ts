import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-no-problem',
  templateUrl: './treatment-no-problem.component.html',
  styleUrls: ['./treatment-no-problem.component.css']
})
export class TreatmentNoProblemComponent implements OnInit {
  public treatmentNoProblemAudio: any;
  public tumorAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.treatmentNoProblemAudio = new Audio();
    this.tumorAudio = new Audio();
  }

  public treatmentNoProblemPlay(): void {
    this.treatmentNoProblemAudio.src = "/assets/audio/diagnosis-treatment/treatment/prostate-tumor-no-problem.mp3";
    this.treatmentNoProblemAudio.load();
    this.treatmentNoProblemAudio.play();
  }

  public treatmentNoProblemStop(): void {
    this.treatmentNoProblemAudio.pause();
  }

  public tumorPlay(): void {
    this.tumorAudio.src = "/assets/audio/diagnosis-treatment/treatment/tumor.mp3";
    this.tumorAudio.load();
    this.tumorAudio.play();
  }

  public tumorStop(): void {
    this.tumorAudio.pause();
  }
}
