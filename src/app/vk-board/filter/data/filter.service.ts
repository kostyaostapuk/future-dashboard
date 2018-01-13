import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  filter = [
    {
      title: 'Show Online',
      fun: 'showOnline'
    },
    {
      title: 'Show Offline',
      fun: 'showOffline'
    },
    {
      title: 'Show Online',
      fun: 'showOnline'
    },
  ]
  getData() {
    return this.filter;
  }
  constructor() { }

}
