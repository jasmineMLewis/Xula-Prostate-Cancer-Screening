import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-choice-home',
  templateUrl: './best-choice-home.component.html',
  styleUrls: ['./best-choice-home.component.css']
})
export class BestChoiceHomeComponent implements OnInit {
  public bestChoiceHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoiceHomeAudio = new Audio();
  }
  
  public bestChoiceHomePlay(): void {
    this.bestChoiceHomeAudio.src = "/assets/audio/best-choice/best-choice-home/best-choice-home.mp3";
    this.bestChoiceHomeAudio.load();
    this.bestChoiceHomeAudio.play();
  }

  public bestChoiceHomeStop(): void {
    this.bestChoiceHomeAudio.pause();
  }
}
