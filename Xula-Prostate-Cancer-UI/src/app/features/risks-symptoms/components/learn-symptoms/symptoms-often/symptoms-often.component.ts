import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'symptoms-often',
  templateUrl: './symptoms-often.component.html',
  styleUrls: ['./symptoms-often.component.css']
})
export class SymptomsOftenComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/features/risks-symptoms/learn-symptoms/often-symptoms.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
