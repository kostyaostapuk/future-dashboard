import { Component, OnInit } from '@angular/core';
import { VkBoardComponent } from '../vk-board.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private comp: VkBoardComponent) { }
  this.comp.getColorStatus();
  ngOnInit() {
  }

}
