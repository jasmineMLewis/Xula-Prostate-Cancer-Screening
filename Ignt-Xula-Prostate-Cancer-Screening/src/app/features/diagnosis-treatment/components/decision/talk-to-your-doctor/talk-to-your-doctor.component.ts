import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'talk-to-your-doctor',
  templateUrl: './talk-to-your-doctor.component.html',
  styleUrls: ['./talk-to-your-doctor.component.css']
})
export class TalkToYourDoctorComponent implements OnInit {
  public talkToYourDoctorAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.talkToYourDoctorAudio = new Audio();
  }

  public talkToYourDoctorPlay(): void {
    this.talkToYourDoctorAudio.src = "/assets/audio/diagnosis-treatment/decision/talk-to-your-doctor.mp3";
    this.talkToYourDoctorAudio.load();
    this.talkToYourDoctorAudio.play();
  }

  public talkToYourDoctorStop(): void {
    this.talkToYourDoctorAudio.pause();
  }
}
