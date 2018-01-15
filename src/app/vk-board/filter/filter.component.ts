import { Component, OnInit } from '@angular/core';
import { VkBoardComponent } from '../vk-board.component';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  searchField: FormControl;
  searchReq="";

  online=false;

  users=[];
  showOnline(online){
    return this.vkBoard.showOnline(online);
  }
  searchFriend(val){
    return this.vkBoard.searchFriend(val);
  }
  searchInput(){
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .distinctUntilChanged()
        .subscribe(term => {
          this.searchReq=term;
          this.searchFriend(this.searchReq.toLowerCase());
        });
  }
  constructor(private vkBoard: VkBoardComponent) { }

  ngOnInit() {
    this.searchInput();
  }

}
