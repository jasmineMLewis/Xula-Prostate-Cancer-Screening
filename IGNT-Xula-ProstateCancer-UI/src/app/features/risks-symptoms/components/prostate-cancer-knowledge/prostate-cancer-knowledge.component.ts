import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prostate-cancer-knowledge',
  templateUrl: './prostate-cancer-knowledge.component.html',
  styleUrls: ['./prostate-cancer-knowledge.component.css']
})
export class ProstateCancerKnowledgeComponent implements OnInit {
  public prostateCancerKnowledgeAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.prostateCancerKnowledgeAudio = new Audio();
  }
  
  public prostateCancerKnowledgePlay(): void {
    this.prostateCancerKnowledgeAudio.src = "/assets/audio/features/risks-symptoms/prostate-cancer-knowledge/prostate-cancer-knowledge.mp3";
    //C:\code-projects\prostate-cancer-training\Xula-Prostate-Cancer-UI\IGNT-Xula-ProstateCancer-UI\src\assets\audio\features\risks-symptoms\prostate-cancer-knowledge
    this.prostateCancerKnowledgeAudio.load();
    this.prostateCancerKnowledgeAudio.play();
  }

  public prostateCancerKnowledgeStop(): void {
    this.prostateCancerKnowledgeAudio.pause();
  }

}
