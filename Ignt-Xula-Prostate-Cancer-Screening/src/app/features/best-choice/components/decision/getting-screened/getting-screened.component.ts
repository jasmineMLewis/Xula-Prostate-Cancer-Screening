import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'getting-screened',
  templateUrl: './getting-screened.component.html',
  styleUrls: ['./getting-screened.component.css']
})
export class GettingScreenedComponent implements OnInit {
  public gettingScreenedAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.gettingScreenedAudio = new Audio();
  }
  
  public gettingScreenedPlay(): void {
    this.gettingScreenedAudio.src = "/assets/audio/best-choice/screening-questions/getting-screened.mp3";
    this.gettingScreenedAudio.load();
    this.gettingScreenedAudio.play();
  }

  public gettingScreenedStop(): void {
    this.gettingScreenedAudio.pause();
  }
}
