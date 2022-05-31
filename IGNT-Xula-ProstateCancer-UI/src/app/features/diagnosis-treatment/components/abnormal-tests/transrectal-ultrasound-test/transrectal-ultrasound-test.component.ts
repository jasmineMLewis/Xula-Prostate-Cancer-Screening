import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transrectal-ultrasound-test',
  templateUrl: './transrectal-ultrasound-test.component.html',
  styleUrls: ['./transrectal-ultrasound-test.component.css']
})
export class TransrectalUltrasoundTestComponent implements OnInit {
  public transrectalUltrasoundTestAudio: any;
  public rectumAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.rectumAudio = new Audio();
    this.transrectalUltrasoundTestAudio = new Audio();
  }

  public rectumPlay(): void {
    this.rectumAudio.src = "/assets/audio/features/diagnosis-treatment/abnormal-tests/rectum.mp3";
    this.rectumAudio.load();
    this.rectumAudio.play();
  }

  public rectumStop(): void {
    this.rectumAudio.pause();
  }

  public transrectalUltrasoundTestPlay(): void {
    this.transrectalUltrasoundTestAudio.src = 
      "/assets/audio/features/diagnosis-treatment/abnormal-tests/transrectal-ultrasound-test.mp3";
    this.transrectalUltrasoundTestAudio.load();
    this.transrectalUltrasoundTestAudio.play();
  }

  public transrectalUltrasoundTestStop(): void {
    this.transrectalUltrasoundTestAudio.pause();
  }
}
