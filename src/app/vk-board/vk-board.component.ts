import { Component, OnInit } from '@angular/core';
import { VkBoardService, Friend } from './vk-board.service';


@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css']
})
export class VkBoardComponent implements OnInit {

  name = "Korsar";
  list=[];
  constructor(private vkService: VkBoardService) {

  }
  ngOnInit() {
    this.vkService.getData()
      .subscribe(res=>{
        let friendsJSON=res._body.response.items;
        this.list=friendsJSON;

        // let friendsList=[];
        // friendsJSON.forEach((res)=>{
        //   let friend= new Friend(res.id, res.first_name,res.last_name);
        //   friendsList.push(friend);
        //   console.log(friend);
        // })
        console.log(this.list);

      })
  }

}
