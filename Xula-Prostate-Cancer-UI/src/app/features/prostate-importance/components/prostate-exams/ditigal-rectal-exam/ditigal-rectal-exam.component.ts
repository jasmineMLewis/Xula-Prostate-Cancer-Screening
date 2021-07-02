import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ditigal-rectal-exam',
  templateUrl: './ditigal-rectal-exam.component.html',
  styleUrls: ['./ditigal-rectal-exam.component.css']
})
export class DitigalRectalExamComponent implements OnInit {
  public prostateExamAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateExamAudio = new Audio();
  }
  
  public ditigalRectalExamPlay(): void {
    this.prostateExamAudio.src = "/assets/audio/features/prostate-importance/prostate-exams/ditigal-rectal-exam.mp3";
    this.prostateExamAudio.load();
    this.prostateExamAudio.play();
  }

  public ditigalRectalExamStop(): void {
    this.prostateExamAudio.pause();
  }
}