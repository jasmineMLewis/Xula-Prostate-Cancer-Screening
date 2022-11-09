import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  public studiesAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.studiesAudio = new Audio();
  }
  
  public studiesPlay(): void {
    this.studiesAudio.src = "/assets/audio/prostate-screening/studies/studies.mp3";
    this.studiesAudio.load();
    this.studiesAudio.play();
  }

  public studiesStop(): void {
    this.studiesAudio.pause();
  }
}
