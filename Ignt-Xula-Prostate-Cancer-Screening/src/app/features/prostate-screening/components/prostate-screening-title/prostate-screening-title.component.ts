import { Component } from '@angular/core';

@Component({
  selector: 'prostate-screening-title',
  templateUrl: './prostate-screening-title.component.html',
  styleUrls: ['./prostate-screening-title.component.css']
})
export class ProstateScreeningTitleComponent {
  public prostateScreeningTitleAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateScreeningTitleAudio = new Audio();
  }
  
  public prostateScreeningTitlePlay(): void {
    this.prostateScreeningTitleAudio.src = 
      "/assets/audio/prostate-screening/prostate-screening-title/prostate-screening-title.mp3";
    this.prostateScreeningTitleAudio.load();
    this.prostateScreeningTitleAudio.play();
  }

  public prostateScreeningTitleStop(): void {
    this.prostateScreeningTitleAudio.pause();
  }
}
