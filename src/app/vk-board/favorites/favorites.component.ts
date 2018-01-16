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
  getFavorites(){
    this.list=JSON.parse(localStorage.getItem('favorites'));
    console.log(this.list);
  }
  getColor(status:number){
    return this.vkBoard.getColorStatus(status);
  }
  ngOnInit() {
    this.getFavorites();
  }
}
