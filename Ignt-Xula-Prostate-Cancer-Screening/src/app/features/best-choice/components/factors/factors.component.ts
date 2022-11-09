import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.css']
})
export class FactorsComponent implements OnInit {
  public factorsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.factorsAudio = new Audio();
  }
  
  public factorsPlay(): void {
    this.factorsAudio.src = "/assets/audio/best-choice/factors/factors.mp3";
    this.factorsAudio.load();
    this.factorsAudio.play();
  }

  public factorsStop(): void {
    this.factorsAudio.pause();
  }
}
