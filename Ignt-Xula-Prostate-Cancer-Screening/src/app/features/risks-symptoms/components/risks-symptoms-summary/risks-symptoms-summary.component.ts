import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'risks-symptoms-summary',
  templateUrl: './risks-symptoms-summary.component.html',
  styleUrls: ['./risks-symptoms-summary.component.css']
})
export class RisksSymptomsSummaryComponent implements OnInit {
  public risksSymptomsSummaryAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.risksSymptomsSummaryAudio = new Audio();
  }
  
  public risksSymptomsSummaryPlay(): void {
    this.risksSymptomsSummaryAudio.src = "/assets/audio/risks-symptoms/risks-symptoms-summary/risks-symptoms-summary.mp3";
    this.risksSymptomsSummaryAudio.load();
    this.risksSymptomsSummaryAudio.play();
  }

  public risksSymptomsSummaryStop(): void {
    this.risksSymptomsSummaryAudio.pause();
  }
}
