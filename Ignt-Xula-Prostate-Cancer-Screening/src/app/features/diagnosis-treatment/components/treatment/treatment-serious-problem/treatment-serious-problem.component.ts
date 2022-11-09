import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treatment-serious-problem',
  templateUrl: './treatment-serious-problem.component.html',
  styleUrls: ['./treatment-serious-problem.component.css']
})
export class TreatmentSeriousProblemComponent implements OnInit {
  public treatmentSeriousProblemDoAudio: any;
  public tumorAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.treatmentSeriousProblemDoAudio = new Audio();
    this.tumorAudio = new Audio();
  }

  public treatmentSeriousProblemPlay(): void {
    this.treatmentSeriousProblemDoAudio.src = "/assets/audio/features/diagnosis-treatment/treatment/prostate-tumor-serious-problem.mp3";
    this.treatmentSeriousProblemDoAudio.load();
    this.treatmentSeriousProblemDoAudio.play();
  }

  public treatmentSeriousProblemStop(): void {
    this.treatmentSeriousProblemDoAudio.pause();
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
