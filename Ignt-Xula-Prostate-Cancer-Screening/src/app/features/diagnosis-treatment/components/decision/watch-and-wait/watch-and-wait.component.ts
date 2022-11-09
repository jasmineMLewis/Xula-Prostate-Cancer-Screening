import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'watch-and-wait',
  templateUrl: './watch-and-wait.component.html',
  styleUrls: ['./watch-and-wait.component.css']
})
export class WatchAndWaitComponent implements OnInit {
  public psaDreBiopsyAudio: any;
  public watchAndWaitAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.psaDreBiopsyAudio = new Audio();
    this.watchAndWaitAudio = new Audio();
  }

  public psaDreBiopsyPlay(): void {
    this.psaDreBiopsyAudio.src = "/assets/audio/diagnosis-treatment/decision/psa-dre-biopsy.mp3";
    this.psaDreBiopsyAudio.load();
    this.psaDreBiopsyAudio.play();
  }

  public psaDreBiopsyStop(): void {
    this.psaDreBiopsyAudio.pause();
  }

  public watchAndWaitPlay(): void {
    this.watchAndWaitAudio.src = "/assets/audio/diagnosis-treatment/decision/watch-and-wait.mp3";
    this.watchAndWaitAudio.load();
    this.watchAndWaitAudio.play();
  }

  public watchAndWaitStop(): void {
    this.watchAndWaitAudio.pause();
  }
}
