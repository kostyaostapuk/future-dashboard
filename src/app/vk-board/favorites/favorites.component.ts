import { Component, OnInit } from '@angular/core';
import { VkBoardComponent } from '../vk-board.component';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private vkBoard: VkBoardComponent) { }


  list=[];
  message:string;
  remove(friendID){
    this.vkBoard.remove(friendID);
    this.getFavorites();
  }
  getFavorites(){
    this.list=JSON.parse(localStorage.getItem('favorites'));
    if (this.list.length==0) {
      this.message="Favorite list is empty";
    }
    else {
      this.message="";
    }
  }
  getColor(status:number){
    return this.vkBoard.getColorStatus(status);
  }
  ngOnInit() {
    this.getFavorites();
  }
}
