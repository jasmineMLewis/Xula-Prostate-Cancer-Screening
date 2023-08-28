import { Component } from '@angular/core';

@Component({
  selector: 'diagnosis-treatment-title',
  templateUrl: './diagnosis-treatment-title.component.html',
  styleUrls: ['./diagnosis-treatment-title.component.css']
})
export class DiagnosisTreatmentTitleComponent {
  public diagnosisTreatmentTitleAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.diagnosisTreatmentTitleAudio = new Audio();
  }
  
  public diagnosisTreatmentTitlePlay(): void {
    this.diagnosisTreatmentTitleAudio.src = 
      "/assets/audio/diagnosis-treatment/diagnosis-treatment-title/diagnosis-treatment-title.mp3";
    this.diagnosisTreatmentTitleAudio.load();
    this.diagnosisTreatmentTitleAudio.play();
  }

  public diagnosisTreatmentTitleStop(): void {
    this.diagnosisTreatmentTitleAudio.pause();
  }
}
