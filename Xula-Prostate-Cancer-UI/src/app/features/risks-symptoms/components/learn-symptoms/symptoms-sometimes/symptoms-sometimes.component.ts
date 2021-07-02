import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-sometimes',
  templateUrl: './symptoms-sometimes.component.html',
  styleUrls: ['./symptoms-sometimes.component.css']
})
export class SymptomsSometimesComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/features/risks-symptoms/learn-symptoms/sometimes-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
