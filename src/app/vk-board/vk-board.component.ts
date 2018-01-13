import { Component, OnInit } from '@angular/core';
import { VkBoardService } from './vk-board.service';
import { AppModule } from '../app.module';



@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css']
})
export class VkBoardComponent implements OnInit {
  list = [];
  color= [ 'linear-gradient(90deg,#fc0,#ffa100)', 'linear-gradient(90deg,#00d9bf,#00d977)'];
  getColorStatus(status: number) {
    switch (status) {
      case 0: return this.color[0];
      case 1: return this.color[1];
    }
  }
  clearList() {
    this.list = [];
    console.log(this.list);

  }
  constructor(private vkService: VkBoardService) {

  }
  ngOnInit() {
    this.vkService.getData()
      .subscribe(res => {
        let friendsJSON=res["_body"].response.items;
        this.list=friendsJSON;

        // let friendsList=[];
        // friendsJSON.forEach((res)=>{
        //   let friend= new Friend(res.id, res.first_name,res.last_name);
        //   friendsList.push(friend);
        //   console.log(friend);
        // })

        // friendsJSON.forEach((res)=>{
        //   let friend
        // })
        console.log(this.list);

      })
  }

}
