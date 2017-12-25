import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	headerBtn={
		title: "Support Us",
		icon: "icon ion-social-github"
	}
  constructor() { }

  ngOnInit() {
  }

}
