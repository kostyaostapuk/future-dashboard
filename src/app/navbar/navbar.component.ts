import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brand="-admin";
  nameThemes={
	  firstTheme: "Light",
	  secondTheme: "Cosmic"
  }
  user={
	  name: "Kostya",
	  surname: "Ostapuk",
	  img: "../assets/images/nick.png"
  }
  constructor() { }

  ngOnInit() {
  }

}
