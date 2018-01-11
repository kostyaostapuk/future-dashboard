import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

export class Friend{
  constructor(
    public userID: number,
    public firstName:string,
    public lastName: string,
    // public photo: string,
    // public link: string,
  )
}
@Injectable()
export class VkBoardService {


  constructor(private jsonp: Jsonp) { }


  getData() {
    return this.jsonp.request("https://api.vk.com/method/friends.search?count=20&access_token=d77f6ca54bccb1cb44e14f70abac26e32e7e927586c95db96a1fb33b9a67baaec5f434b4d945394c69d30&v=5.52&callback=JSONP_CALLBACK")
      .map(result=>result);
  }
}
