import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-choice-questionnaire',
  templateUrl: './best-choice-questionnaire.component.html',
  styleUrls: ['./best-choice-questionnaire.component.css']
})
export class BestChoiceQuestionnaireComponent implements OnInit {
  public bestChoiceQuestionnaireAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.bestChoiceQuestionnaireAudio = new Audio();
  }
  
  public bestChoiceQuestionnairePlay(): void {
    this.bestChoiceQuestionnaireAudio.src = "/assets/audio/risks-symptoms/best-choice-questionnaire/best-choice-questionnaire.mp3";
    this.bestChoiceQuestionnaireAudio.load();
    this.bestChoiceQuestionnaireAudio.play();
  }

  public bestChoiceQuestionnaireStop(): void {
    this.bestChoiceQuestionnaireAudio.pause();
  }
}
