import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'electricity-chart',
  templateUrl: './electricity-chart.component.html',
  styleUrls: ['./electricity-chart.component.css']
})
export class ElectricityChartComponent implements OnInit {


  constructor() {
		// var elem= el[0].getElementById("electricity-chart");
		// var context=elem.getContext("2d");
		// context.moveTo(0,0);
		// context.lineTo(200,100);
		// context.stroke();
		const point=[490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
      720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
      145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
      340, 340, 340, 340, 340, 340, 340, 340];
	}

  ngOnInit() {
  }

}
