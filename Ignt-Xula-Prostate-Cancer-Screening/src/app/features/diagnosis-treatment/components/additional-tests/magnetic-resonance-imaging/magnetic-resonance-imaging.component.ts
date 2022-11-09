import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'magnetic-resonance-imaging',
  templateUrl: './magnetic-resonance-imaging.component.html',
  styleUrls: ['./magnetic-resonance-imaging.component.css']
})
export class MagneticResonanceImagingComponent implements OnInit {
  public magneticResonanceImagingAudio: any;
  
  constructor() { 
    this.magneticResonanceImagingAudio = new Audio();
  }

  ngOnInit(): void {
  }

  public magneticResonanceImagingPlay(): void {
    this.magneticResonanceImagingAudio.src = "/assets/audio/diagnosis-treatment/additional-tests/magnetic-resonance-imaging.mp3";
    this.magneticResonanceImagingAudio.load();
    this.magneticResonanceImagingAudio.play();
  }

  public magneticResonanceImagingStop(): void {
    this.magneticResonanceImagingAudio.pause();
  }
}
