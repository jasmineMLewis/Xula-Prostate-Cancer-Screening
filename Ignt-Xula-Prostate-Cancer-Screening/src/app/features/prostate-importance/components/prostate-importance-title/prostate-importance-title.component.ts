import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-importance-title',
  templateUrl: './prostate-importance-title.component.html',
  styleUrls: ['./prostate-importance-title.component.css']
})
export class ProstateImportanceTitleComponent implements OnInit {
  public prostateImportanceTitleAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateImportanceTitleAudio = new Audio();
  }
  
  public prostateImportanceTitlePlay(): void {
    this.prostateImportanceTitleAudio.src = 
      "/assets/audio/prostate-importance/prostate-importance-title/prostate-importance-title.mp3";
    this.prostateImportanceTitleAudio.load();
    this.prostateImportanceTitleAudio.play();
  }

  public prostateImportanceTitleStop(): void {
    this.prostateImportanceTitleAudio.pause();
  }
}
