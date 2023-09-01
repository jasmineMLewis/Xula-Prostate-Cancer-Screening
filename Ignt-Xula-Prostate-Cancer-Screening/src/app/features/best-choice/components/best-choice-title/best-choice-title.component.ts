import { Component } from '@angular/core';

@Component({
  selector: 'best-choice-title',
  templateUrl: './best-choice-title.component.html',
  styleUrls: ['./best-choice-title.component.css']
})
export class BestChoiceTitleComponent {
  public bestChoiceTitleAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoiceTitleAudio = new Audio();
  }
  
  public bestChoiceTitlePlay(): void {
    this.bestChoiceTitleAudio.src = "/assets/audio/best-choice/best-choice-title/best-choice-title.mp3";
    this.bestChoiceTitleAudio.load();
    this.bestChoiceTitleAudio.play();
  }

  public bestChoiceTitleStop(): void {
    this.bestChoiceTitleAudio.pause();
  }
}
