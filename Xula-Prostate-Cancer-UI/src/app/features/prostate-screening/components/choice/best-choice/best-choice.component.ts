import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-choice',
  templateUrl: './best-choice.component.html',
  styleUrls: ['./best-choice.component.css']
})
export class BestChoiceComponent implements OnInit {
  public bestChoiceAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoiceAudio = new Audio();
  }
  
  public bestChoicePlay(): void {
    this.bestChoiceAudio.src = "/assets/audio/features/prostate-screening/choice/best-choice.mp3";
    this.bestChoiceAudio.load();
    this.bestChoiceAudio.play();
  }

  public bestChoiceStop(): void {
    this.bestChoiceAudio.pause();
  }
}
