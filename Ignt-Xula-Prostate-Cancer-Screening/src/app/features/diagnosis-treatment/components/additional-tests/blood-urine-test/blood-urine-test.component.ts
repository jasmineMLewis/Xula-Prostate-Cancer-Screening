import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blood-urine-test',
  templateUrl: './blood-urine-test.component.html',
  styleUrls: ['./blood-urine-test.component.css']
})
export class BloodUrineTestComponent implements OnInit {
  public bloodUrineTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bloodUrineTestAudio = new Audio();
  }

  public bloodUrineTestPlay(): void {
    this.bloodUrineTestAudio.src = "/assets/audio/diagnosis-treatment/additional-tests/blood-urine-tests.mp3";
    this.bloodUrineTestAudio.load();
    this.bloodUrineTestAudio.play();
  }

  public bloodUrineTestStop(): void {
    this.bloodUrineTestAudio.pause();
  }
}
