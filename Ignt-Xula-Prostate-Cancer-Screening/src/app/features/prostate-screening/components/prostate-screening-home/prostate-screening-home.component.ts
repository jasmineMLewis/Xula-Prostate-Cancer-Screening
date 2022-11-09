import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-screening-home',
  templateUrl: './prostate-screening-home.component.html',
  styleUrls: ['./prostate-screening-home.component.css']
})
export class ProstateScreeningHomeComponent implements OnInit {
  public prostateScreeningHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateScreeningHomeAudio = new Audio();
  }
  
  public prostateScreeningHomePlay(): void {
    this.prostateScreeningHomeAudio.src = 
      "/assets/audio/prostate-screening/prostate-screening-home/prostate-screening-home.mp3";
    this.prostateScreeningHomeAudio.load();
    this.prostateScreeningHomeAudio.play();
  }

  public prostateScreeningHomeStop(): void {
    this.prostateScreeningHomeAudio.pause();
  }
}
