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
  list = [];

  clearList() {
    this.list = [];
  }
  showOnline(){
    this.clearList();
    this.vkService.getOnline()
      .subscribe(res => {
        let friendsJSON=res["_body"].response.items;
        this.list=friendsJSON;
    })
  }
  constructor(private vkService: VkBoardService) {}
  ngOnInit() {
    this.vkService.getData()
      .subscribe(res => {
        let friendsJSON=res["_body"].response.items;
        this.list=friendsJSON;
      })
  }




  //StatusColor
  color= [ 'linear-gradient(90deg,#fc0,#ffa100)', 'linear-gradient(90deg,#00d9bf,#00d977)'];
  getColorStatus(status: number) {
    switch (status) {
      case 0: return this.color[0];
      case 1: return this.color[1];
    }
  }
}
