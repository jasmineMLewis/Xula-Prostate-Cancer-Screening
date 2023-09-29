import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-getting-screened',
  templateUrl: './not-getting-screened.component.html',
  styleUrls: ['./not-getting-screened.component.css']
})
export class NotGettingScreenedComponent implements OnInit {
  public notGettingScreenedAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.notGettingScreenedAudio = new Audio();
  }
  
  public notGettingScreenedPlay(): void {
    this.notGettingScreenedAudio.src = "/assets/audio/best-choice/screening-questions/not-getting-screened.mp3";
    this.notGettingScreenedAudio.load();
    this.notGettingScreenedAudio.play();
  }

  public notGettingScreenedStop(): void {
    this.notGettingScreenedAudio.pause();
  }
}
