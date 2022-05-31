import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'what-is-prostate',
  templateUrl: './what-is-prostate.component.html',
  styleUrls: ['./what-is-prostate.component.css']
})
export class WhatIsProstateComponent implements OnInit {
  public audio: any;

  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio();
  }

  public bladderRectumPlay(): void {
    this.audio.src = "/assets/audio/features/prostate-importance/what-is-prostate/bladder-rectum.mp3";
    this.audio.load();
    this.audio.play();
  }

  public bladderRectumStop(): void {
    this.audio.pause();
  }
}
