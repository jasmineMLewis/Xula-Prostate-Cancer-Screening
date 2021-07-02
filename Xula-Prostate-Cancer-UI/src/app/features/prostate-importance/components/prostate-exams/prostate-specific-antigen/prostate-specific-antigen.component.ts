import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-specific-antigen',
  templateUrl: './prostate-specific-antigen.component.html',
  styleUrls: ['./prostate-specific-antigen.component.css']
})
export class ProstateSpecificAntigenComponent implements OnInit {
  public prostateExamAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateExamAudio = new Audio();
  }
  
  public prostateSpecificAntigenPlay(): void {
    this.prostateExamAudio.src = "/assets/audio/features/prostate-importance/prostate-exams/prostate-specific-antigen.mp3";
    this.prostateExamAudio.load();
    this.prostateExamAudio.play();
  }

  public prostateSpecificAntigenStop(): void {
    this.prostateExamAudio.pause();
  }
}
