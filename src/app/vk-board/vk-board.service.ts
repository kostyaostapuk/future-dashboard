import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { JsonpModule, Jsonp, Response } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';



@Injectable()
export class VkBoardService {

  constructor(private http: HttpClient){}

  export getData(){
    const url: string = "https://api.vk.com/method/friends.search?count=60&access_token=93e47a92ea1a59dc6fa6cabf33ded84026fb40cfdcba271ac69c7af84cf2ce16ab476f51b742967a7c3d7&v=5.52&callback=JSONP_CALLBACK";
    return this.http.jsonp(url, 'callback');
    // let apiUrl=`${this.url}&callback=JSONP_CALLBACK`;
    // return this.jsonp.request(apiUrl)
    //   .map(res=>{
    //     return res.json().results.map(item=>{
    //       console.log(item);
    //     });
    //   });
  }
}
