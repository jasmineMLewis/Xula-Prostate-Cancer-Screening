import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enlarged-prostate',
  templateUrl: './enlarged-prostate.component.html',
  styleUrls: ['./enlarged-prostate.component.css']
})
export class EnlargedProstateComponent implements OnInit {
  public enlargedProstateaAudio: any;
  public urethraAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.enlargedProstateaAudio = new Audio();
    this.urethraAudio = new Audio();
  }
  
  public enlargedProstatePlay(): void {
    this.enlargedProstateaAudio.src = "/assets/audio/features/prostate-importance/common-problems/enlarged-prostate.mp3";
    this.enlargedProstateaAudio.load();
    this.enlargedProstateaAudio.play();
  }

  public enlargedProstateStop(): void {
    this.enlargedProstateaAudio.pause();
  }

  public urethraPlay(): any {
    this.urethraAudio.src = "/assets/audio/features/prostate-importance/common-problems/urethra.mp3";
    this.urethraAudio.load();
    this.urethraAudio.play();
  }

  public urethraStop(): any {
    this.urethraAudio.pause();
  }
}
