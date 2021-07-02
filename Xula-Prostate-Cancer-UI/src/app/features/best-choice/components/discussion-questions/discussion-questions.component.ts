import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'discussion-questions',
  templateUrl: './discussion-questions.component.html',
  styleUrls: ['./discussion-questions.component.css']
})
export class DiscussionQuestionsComponent implements OnInit {
  public discussionQuestionsAudio: any;

  constructor() { }

  ngOnInit(): void {
    this.discussionQuestionsAudio = new Audio();
  }
  
  public discussionQuestionsPlay(): void {
    this.discussionQuestionsAudio.src = "/assets/audio/features/best-choice/discussion/discussion-questions.mp3";
    this.discussionQuestionsAudio.load();
    this.discussionQuestionsAudio.play();
  }

  public discussionQuestionsStop(): void {
    this.discussionQuestionsAudio.pause();
  }
}
