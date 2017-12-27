import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

	consumedTitle:string="Consumed";
	spentTitle:string="Spent";

	consumendAmount:number=816;
	spentAmount:number=816;
  constructor() { }

  ngOnInit() {
  }

}
