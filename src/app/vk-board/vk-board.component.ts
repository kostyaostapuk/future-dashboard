import { Component, OnInit } from '@angular/core';
import { VkBoardService } from './vk-board.service';


@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css']
})
export class VkBoardComponent implements OnInit {
  alert(){
    alert("eqqweq");
  }
  list=[];
  color=[
    'linear-gradient(90deg,#fc0,#ffa100)',
    'linear-gradient(90deg,#00d9bf,#00d977)'
  ];
  getColorStatus(status){
    switch (status){
      case 0:
        return this.color[0];
      break;
      case 1:
        return this.color[1];
      break;

    }
  }
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

        // friendsJSON.forEach((res)=>{
        //   let friend
        // })
        console.log(this.list);

      })
  }

}
