import { Component, OnInit } from '@angular/core';
import { VkBoardService } from './vk-board.service';
@Component({
  selector: 'vk-board',
  templateUrl: './vk-board.component.html',
  styleUrls: ['./vk-board.component.css'],

  providers: [VkBoardService]
})
export class VkBoardComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
