import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doctor-visit',
  templateUrl: './doctor-visit.component.html',
  styleUrls: ['./doctor-visit.component.css']
})
export class DoctorVisitComponent implements OnInit {
  public doctorVisitAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.doctorVisitAudio = new Audio();
  }
  
  public doctorVisitPlay(): void {
    this.doctorVisitAudio.src = "/assets/audio/features/prostate-importance/doctor-visit/doctor-visit.mp3";
    this.doctorVisitAudio.load();
    this.doctorVisitAudio.play();
  }

  public doctorVisitStop(): void {
    this.doctorVisitAudio.pause();
  }
}
