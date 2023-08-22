import { Component } from '@angular/core';

@Component({
  selector: 'risks-symptoms-title',
  templateUrl: './risks-symptoms-title.component.html',
  styleUrls: ['./risks-symptoms-title.component.css']
})
export class RisksSymptomsTitleComponent {
  public risksSymptomsTitleAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.risksSymptomsTitleAudio = new Audio();
  }
  
  public risksSymptomsTitlePlay(): void {
    this.risksSymptomsTitleAudio.src = "/assets/audio/risks-symptoms/risks-symptoms-title/risks-symptoms-title.mp3";
    this.risksSymptomsTitleAudio.load();
    this.risksSymptomsTitleAudio.play();
  }

  public risksSymptomsTitleStop(): void {
    this.risksSymptomsTitleAudio.pause();
  }
}
