import { Component, OnInit } from '@angular/core';
import {TalkService} from '../talk.service';
import {Http} from '@angular/http';

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

  talks;

  constructor(private talkService: TalkService, public network: Http) {
    this.talks = this.talkService.getAllTalks();
  }

  ngOnInit(): void {}

  onKeyUp(value){
    console.log('Clicked! ' + value);
  }

  log($event) {
    console.log('Padre: ' + $event);
  }

}
