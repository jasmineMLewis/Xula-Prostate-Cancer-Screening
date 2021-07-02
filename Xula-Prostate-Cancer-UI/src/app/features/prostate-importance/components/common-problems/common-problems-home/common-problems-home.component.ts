import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-problems-home',
  templateUrl: './common-problems-home.component.html',
  styleUrls: ['./common-problems-home.component.css']
})
export class CommonProblemsHomeComponent implements OnInit {
  public commonProblemAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.commonProblemAudio = new Audio();
  }
  
  public commonProblemsHomePlay(): void {
    this.commonProblemAudio.src = "/assets/audio/features/prostate-importance/common-problems/common-problems-home.mp3";
    this.commonProblemAudio.load();
    this.commonProblemAudio.play();
  }

  public commonProblemsHomeStop(): void {
    this.commonProblemAudio.pause();
  }
}
