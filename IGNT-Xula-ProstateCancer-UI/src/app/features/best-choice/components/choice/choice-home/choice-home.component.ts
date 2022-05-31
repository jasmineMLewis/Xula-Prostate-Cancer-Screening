import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choice-home',
  templateUrl: './choice-home.component.html',
  styleUrls: ['./choice-home.component.css']
})
export class ChoiceHomeComponent implements OnInit {
  public choiceHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.choiceHomeAudio = new Audio();
  }
  
  public choiceHomePlay(): void {
    this.choiceHomeAudio.src = "/assets/audio/features/best-choice/choice/choice-home.mp3";
    this.choiceHomeAudio.load();
    this.choiceHomeAudio.play();
  }

  public choiceHomeStop(): void {
    this.choiceHomeAudio.pause();
  }
}
