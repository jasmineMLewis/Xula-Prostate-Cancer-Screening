import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psa-test',
  templateUrl: './psa-test.component.html',
  styleUrls: ['./psa-test.component.css']
})
export class PsaTestComponent implements OnInit {
  public psaTestAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.psaTestAudio = new Audio();
  }
  
  public psaTestPlay(): void {
    this.psaTestAudio.src = "/assets/audio/features/prostate-screening/choice/psa-test.mp3";
    this.psaTestAudio.load();
    this.psaTestAudio.play();
  }

  public psaTestStop(): void {
    this.psaTestAudio.pause();
  }
}
