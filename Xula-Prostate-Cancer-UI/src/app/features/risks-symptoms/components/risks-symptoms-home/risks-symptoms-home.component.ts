import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'risks-symptoms-home',
  templateUrl: './risks-symptoms-home.component.html',
  styleUrls: ['./risks-symptoms-home.component.css']
})
export class RisksSymptomsHomeComponent implements OnInit {
  public risksSymptomsHomeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.risksSymptomsHomeAudio = new Audio();
  }
  
  public risksSymptomsHomePlay(): void {
    this.risksSymptomsHomeAudio.src = "/assets/audio/features/risks-symptoms/risks-symptoms-home/risks-symptoms-home.mp3";
    this.risksSymptomsHomeAudio.load();
    this.risksSymptomsHomeAudio.play();
  }

  public risksSymptomsHomeStop(): void {
    this.risksSymptomsHomeAudio.pause();
  }
}
