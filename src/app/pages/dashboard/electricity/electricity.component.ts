import { Component, OnInit } from '@angular/core';
import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css'],
	providers: [ElectricityService]
})
export class ElectricityComponent implements OnInit {

	consumedTitle:string="Consumed";
	spentTitle:string="Spent";

	consumendValue:number=816;
	spentValue:number=291;

	consumendUnit:string="kWh";
	spentUnit:string="USD";

  

	data: Array<any>;
  constructor(private eService: ElectricityService) {
		this.data=eService.getData();
	}

  ngOnInit() {
  }

}
