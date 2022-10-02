import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-importance-summary',
  templateUrl: './prostate-importance-summary.component.html',
  styleUrls: ['./prostate-importance-summary.component.css']
})
export class ProstateImportanceSummaryComponent implements OnInit {
  public prostateImportanceSummaryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateImportanceSummaryAudio = new Audio();
  }
  
  public prostateImportanceSummaryPlay(): void {
    this.prostateImportanceSummaryAudio.src = 
      "/assets/audio/prostate-importance/prostate-importance-summary/prostate-importance-summary.mp3";
    this.prostateImportanceSummaryAudio.load();
    this.prostateImportanceSummaryAudio.play();
  }

  public prostateImportanceSummaryStop(): void {
    this.prostateImportanceSummaryAudio.pause();
  }

}
