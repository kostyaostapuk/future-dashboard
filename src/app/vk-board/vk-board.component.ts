import { Component, OnInit, Injectable } from '@angular/core';
import { VkBoardService } from './vk-board.service';

@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css']
})

@Injectable()
export class VkBoardComponent implements OnInit {

  //Friend List
  searchList = [];
  list = [];
  cache = [];
  messageNotFound: string = "";
  clearList() {
    this.list = [];
  }


  constructor(private vkService: VkBoardService) { }
  ngOnInit() {
    this.getData();
  }
  showOnline(status) {
    if (status === true) {
      this.cache = this.list;
      this.clearList();
      for (let i = 0; i < this.cache.length; i++) {
        if (this.cache[i].online === 1) {
          this.list.push(this.cache[i]);
        }
      }

    }
    else {
      this.clearList();
      this.getData();
    }
  }
  searchFriend(val) {
    console.log("val:" + val);
    this.searchList = this.list;
    this.clearList();

    if (val.length > 0) {

      for (let i = 0; i < this.searchList.length; i++) {
        if (this.searchList[i].first_name.toLowerCase().indexOf(val, 0) == 0 || this.searchList[i].last_name.toLowerCase().indexOf(val, 0) == 0) {
          this.list.push(this.searchList[i]);
        }
        else{
          this.messageNotFound = "Пользователи с такими данными не найдены, попробуйте ещё раз";
        }
      }
    }
    else {
      this.messageNotFound = "";
      this.clearList();
      this.getData();

    }
  }
  getData() {
    this.vkService.getData()
      .subscribe(res => {
        let friendsJSON = res["_body"].response.items;
        this.list = friendsJSON;

      })
  }


  //StatusColor
  color = ['linear-gradient(90deg,#fc0,#ffa100)', 'linear-gradient(90deg,#00d9bf,#00d977)'];
  getColorStatus(status: number) {
    switch (status) {
      case 0: return this.color[0];
      case 1: return this.color[1];
    }
  }
}
