import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  public diagnosis: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosis = new Audio();
  }
  
  public diagnosisPlay(): void {
    this.diagnosis.src = "/assets/audio/diagnosis-treatment/diagnosis/diagnosis.mp3";
    this.diagnosis.load();
    this.diagnosis.play();
  }

  public diagnosisStop(): void {
    this.diagnosis.pause();
  }
}
