import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-importance-home',
  templateUrl: './prostate-importance-home.component.html',
  styleUrls: ['./prostate-importance-home.component.css']
})
export class ProstateImportanceHomeComponent implements OnInit {
  public prostateImportanceHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateImportanceHomeAudio = new Audio();
  }
  
  public prostateImportanceHomePlay(): void {
    this.prostateImportanceHomeAudio.src = 
      "/assets/audio/prostate-importance/prostate-importance-home/prostate-importance-home.mp3";
    this.prostateImportanceHomeAudio.load();
    this.prostateImportanceHomeAudio.play();
  }

  public prostateImportanceHomeStop(): void {
    this.prostateImportanceHomeAudio.pause();
  }
}
