import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digital-rectal-exam',
  templateUrl: './digital-rectal-exam.component.html',
  styleUrls: ['./digital-rectal-exam.component.css']
})
export class DigitalRectalExamComponent implements OnInit {
  public digitalRectalAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.digitalRectalAudio = new Audio();
  }
  
  public digitalRectalExamPlay(): void {
    this.digitalRectalAudio.src = "/assets/audio/prostate-importance/prostate-exams/digital-rectal-exam.mp3";
    this.digitalRectalAudio.load();
    this.digitalRectalAudio.play();
  }

  public digitalRectalExamStop(): void {
    this.digitalRectalAudio.pause();
  }
}
