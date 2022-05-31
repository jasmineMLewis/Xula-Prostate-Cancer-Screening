import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public prostateImportance: string = "Prostate Importance";
  public risksSymptoms: string = "Risks & Symptoms";
  public prostateScreening: string ="Screening for Cancer";
  public diagnosisTreatment: string = "Diagnosis & Treatment";
  public bestChoice: string = "Best Choice";
  
  public homeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.homeAudio = new Audio();
  }
  
  public homePlay(): void {
    this.homeAudio.src = "/assets/audio/features/home/home.mp3";
    this.homeAudio.load();
    this.homeAudio.play();
  }

  public homeStop(): void {
    this.homeAudio.pause();
  }
}
