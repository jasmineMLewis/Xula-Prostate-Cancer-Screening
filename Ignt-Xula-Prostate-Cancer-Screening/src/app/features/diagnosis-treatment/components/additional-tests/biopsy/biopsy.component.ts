import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biopsy',
  templateUrl: './biopsy.component.html',
  styleUrls: ['./biopsy.component.css']
})
export class BiopsyComponent implements OnInit {
  public biopsyAudio: any;

  constructor() { 
    this.biopsyAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public biposyPlay(): void {
    this.biopsyAudio.src = "/assets/audio/diagnosis-treatment/additional-tests/biopsy.mp3";
    this.biopsyAudio.load();
    this.biopsyAudio.play();
  }

  public biposyStop(): void {
    this.biopsyAudio.pause();
  }
}
