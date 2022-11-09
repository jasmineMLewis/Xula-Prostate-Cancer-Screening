import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'what-to-do',
  templateUrl: './what-to-do.component.html',
  styleUrls: ['./what-to-do.component.css']
})
export class WhatToDoComponent implements OnInit {
  public symptomsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.symptomsAudio = new Audio();
  }
  
  public symptomsPlay(): void {
    this.symptomsAudio.src = "/assets/audio/risks-symptoms/learn-symptoms/what-to-do.mp3";
    this.symptomsAudio.load();
    this.symptomsAudio.play();
  }

  public symptomsStop(): void {
    this.symptomsAudio.pause();
  }
}
