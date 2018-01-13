import { Component, OnInit } from '@angular/core';
import { FilterService } from './data/filter.service';
import { VkBoardComponent} from '../vk-board.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filterData: FilterService, private vkBoardFun: VkBoardComponent) { }

  filterFields=[];
  getFilterData(){
    this.filterFields = this.filterData.getData();
    console.log(this.filterFields);
  }
  showOnline(){
    this.vkBoardFun.showOnline();
  }
  onFilter(val){
    switch (val){
      case 'showOnline':
        this.vkBoardFun.showOnline();
        console.log("qweqwe");
      break;

      case 'showOffline':

      break;
    }
  }
  ngOnInit() {
    this.getFilterData();
  }

}
