import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-exams-home',
  templateUrl: './prostate-exams-home.component.html',
  styleUrls: ['./prostate-exams-home.component.css']
})
export class ProstateExamsHomeComponent implements OnInit {
  public prostateExamAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateExamAudio = new Audio();
  }
  
  public prostateExamsHomePlay(): void {
    this.prostateExamAudio.src = "/assets/audio/prostate-importance/prostate-exams/prostate-exam-home.mp3";
    this.prostateExamAudio.load();
    this.prostateExamAudio.play();
  }

  public prostateExamsHomeStop(): void {
    this.prostateExamAudio.pause();
  }
}
