import { Component, OnInit } from '@angular/core';
import { FilterService } from './data/filter.service';
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


  showOnline(online){
    // online=this.online;
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
          // this.searches.push(term);
          this.searchFriend(this.searchReq);
          console.log(this.searchReq);
          return term;

        });
  }
  constructor(private filterData: FilterService, private vkBoard: VkBoardComponent) { }

  ngOnInit() {
      this.searchInput();
  }

}
