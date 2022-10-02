import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-specific-antigen',
  templateUrl: './prostate-specific-antigen.component.html',
  styleUrls: ['./prostate-specific-antigen.component.css']
})
export class ProstateSpecificAntigenComponent implements OnInit {
  public prostateSpecificAntigenAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateSpecificAntigenAudio = new Audio();
  }
  
  public prostateSpecificAntigenPlay(): void {
    this.prostateSpecificAntigenAudio.src = "/assets/audio/prostate-importance/prostate-exams/prostate-specific-antigen.mp3";
    this.prostateSpecificAntigenAudio.load();
    this.prostateSpecificAntigenAudio.play();
  }

  public prostateSpecificAntigenStop(): void {
    this.prostateSpecificAntigenAudio.pause();
  }
}
