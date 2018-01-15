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
  favoriteList=[];
  messageNotFound: string = "";

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
          this.messageNotFound = "";
          this.list.push(this.searchList[i]);

        }
        if(this.list.length<=0){
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
  showMessageBox(){
    //
  }
  saveInLocalStorage(userName, userSurname, photo, userID, online){

    // //
    if (this.favoriteList.length==0) {
      alert("Friend add to Favorites List");
      this.favoriteList.push({first_name: userName, last_name: userSurname,photo_100: photo,id: userID, online: online  });
      localStorage.setItem("favorites" , JSON.stringify(this.favoriteList));
    }
    else{

      if(this.favoriteList[0].id==userID){
        alert("This user is already added");
      }
      else {
        // this.favoriteList=JSON.parse(localStorage.getItem('favorites'));
        // console.log(this.favoriteList);
        // console.log(JSON.parse(localStorage.getItem('favorites')));
        for (let i = 0; i < this.favoriteList.length; i++) {

            if (this.favoriteList[i].id!=userID) {
              alert("Friend add to Favorites List");
              this.favoriteList.push({first_name: userName, last_name: userSurname,photo_100: photo,id: userID, online: online  });
              localStorage.setItem("favorites" , JSON.stringify(this.favoriteList));
              localStorage["favorites"]= JSON.stringify(this.favoriteList);
              console.log(JSON.parse(localStorage.getItem('favorites')));
            }
        }
      }
    }
    //localStorage.setItem("favoritesList" , JSON.stringify(this.favoriteList));

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
