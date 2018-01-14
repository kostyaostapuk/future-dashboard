import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class VkBoardService {
  constructor(private jsonp: Jsonp) { }

  //method, count, fieldPhoto, fieldOnline
  method:string="";
  getData() {
    this.method="friends.search";
    return this.jsonp.request(`https://api.vk.com/method/${this.method}?count=50&fields=photo_100,online,sex&access_token=7a8f3e60e0fe7fd4ba4f40bff0e48656524847c9300f5f67f55edd98712fd91402354eb91b83d03b06d62&v=5.52&callback=JSONP_CALLBACK`)
      .map(result=>result);
  }
}
