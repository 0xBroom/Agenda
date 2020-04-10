import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-talk',
  template: `
    <p [ngStyle]="style" (click)="onClick()" >
      {{talk?.date | date: 'HH:mm'}}
      {{talk?.title}}
    </p>
  `,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  @Output() talkClicked: EventEmitter<any> = new EventEmitter<any>();

  style = {
    'background-color': 'lightgray',
    padding: '10px'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.talk);
    this.talkClicked.emit(this.talk);
  }

}
