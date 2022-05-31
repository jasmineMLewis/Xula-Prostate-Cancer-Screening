import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-blood-urine-test',
  templateUrl: './new-blood-urine-test.component.html',
  styleUrls: ['./new-blood-urine-test.component.css']
})
export class NewBloodUrineTestComponent implements OnInit {
  public newBloodUrineTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.newBloodUrineTestAudio = new Audio();
  }

  public newBloodUrineTestPlay(): void {
    this.newBloodUrineTestAudio.src = "/assets/audio/features/diagnosis-treatment/abnormal-tests/new-blood-urine-tests.mp3";
    this.newBloodUrineTestAudio.load();
    this.newBloodUrineTestAudio.play();
  }

  public newBloodUrineTestStop(): void {
    this.newBloodUrineTestAudio.pause();
  }
}
