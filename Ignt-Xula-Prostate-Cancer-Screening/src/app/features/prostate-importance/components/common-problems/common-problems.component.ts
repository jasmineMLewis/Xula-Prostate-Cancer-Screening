import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'common-problems',
  templateUrl: './common-problems.component.html',
  styleUrls: ['./common-problems.component.css']
})
export class CommonProblemsComponent implements OnInit {
 //@ViewChild('previousNextButtons', { static: false }) previousNextButtons!:PreviousNextButtonsComponent;

  //@Output('previousNextButtons') previousNextButtons: EventEmitter<any> = new EventEmitter();
  @Output() hideComponent: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.previousNextButtons.module);
  //  this.hideComponent = true;
   // this.previousNextButtons.emit();
   //previousNextButtons.module = 'prostate-importance';
  }

  ngAfterViewInit() {
    // child is set
    //this.previousNextButtons.module = 'prostate-importance';
  }
}
