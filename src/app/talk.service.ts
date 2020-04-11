import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor() { }

  getAllTalks(): any{
    return [
      {title: 'Angular rocks!', date: new Date()},
      {title: 'Android 101', date: new Date()}
    ];
  }
}
