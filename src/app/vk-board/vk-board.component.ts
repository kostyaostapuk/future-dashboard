import { Component, OnInit, Injectable } from '@angular/core';
import { VkBoardService } from './vk-board.service';



@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css']
})

@Injectable()
export class VkBoardComponent implements OnInit {
  searchList = [];
  list = [];
  cache = [];
  favoriteList = [];
  messageNotFound: string = "";
  inList: boolean;

  constructor(private vkService: VkBoardService) { }
  ngOnInit() {
    this.getData();

    this.load();
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
    this.searchList = this.list;
    this.clearList();

    if (val.length > 0) {

      for (let i = 0; i < this.searchList.length; i++) {
        if (this.searchList[i].first_name.toLowerCase().indexOf(val, 0) == 0 || this.searchList[i].last_name.toLowerCase().indexOf(val, 0) == 0) {
          this.messageNotFound = "";
          this.list.push(this.searchList[i]);

        }
        if (this.list.length <= 0) {
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
  sendMessage(){
    alert("Binding to sending a message");
  }
  save() {
      localStorage.setItem("favorites", JSON.stringify(this.favoriteList));
  }
  remove(friendID){
      if (this.favoriteList.length==0) {
          this.load();
      }
      let res=window.confirm('Are you sure you want to delete?');
      if (res==true) {
        for (let i = 0; i < this.favoriteList.length; i++) {
            if (this.favoriteList[i].id==friendID) {
                  this.favoriteList.splice(i,1);
                  this.save();
            }
        }
      }
  }
  load() {
    let data = localStorage.getItem('favorites');
    if (!data) {
      return
    }
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      let friend = data[i];
      this.favoriteList.push(friend);
    }

  }

  saveInLocalStorage(userName, userSurname, photo, userID, online) {

    if (this.favoriteList.length == 0) {
      alert("Friend add to Favorites List");
      this.favoriteList.push({ first_name: userName, last_name: userSurname, photo_100: photo, id: userID, online: online });
      this.save();
    }
    else {
      for (let i = 0; i < this.favoriteList.length; i++) {
        if (this.favoriteList[i].id == userID) {
          this.inList=true;
          break;
        }else{
          this.inList=false;
        }
      }
    }
    switch (this.inList){
      case true:
        alert("The user has been added");
      break;
      case false:
        alert("Friend add to Favorites List");
        this.favoriteList.push({ first_name: userName, last_name: userSurname, photo_100: photo, id: userID, online: online });
        this.save();
      break;
    }
  }
getData() {
  this.vkService.getData("friends.search")
    .subscribe(res => {
      let friendsJSON = res["_body"].response.items;
      this.list = friendsJSON;

    })
}
clearList() {
  this.list = [];
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
