import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  template: `
    <label for="search">Search</label>
    <input type="text" (keyup)="onKeyUp(search.value)" #search id="search">

    <app-talk *ngFor="let talk of talks" [talk]="talk" (talkClicked)="log($event)"></app-talk>
  `,
  // templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any> = [
    {title: 'Angular rocks!', date: new Date()},
    {title: 'Android 101', date: new Date()}
  ];

  style = {
      'background-color': 'lightgray',
      padding: '10px'
    };

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(value){
    console.log('Clicked! ' + value);
  }

  log($event) {
    console.log('Padre: ' + $event);
  }

}
