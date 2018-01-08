import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	switch(card:string){
		switch (card){
			case "cardLight":
				if (this.cardLight.status=="On") {
				    this.cardLight.status="Off";
				}else{
						this.cardLight.status="On";
				}
			break;
			case "cardRoller":
				if (this.cardRoller.status=="On") {
				    this.cardRoller.status="Off";
				}else{
						this.cardRoller.status="On";
				}
			break;
			case "cardAudio":
				if (this.cardAudio.status=="On") {
				    this.cardAudio.status="Off";
				}else{
						this.cardAudio.status="On";
				}
			break;
			case "cardCoffee":
				if (this.cardCoffee.status=="On") {
				    this.cardCoffee.status="Off";
				}else{
						this.cardCoffee.status="On";
				}
			break;
		}
	}
	cardLight = {
		title: "Light",
		icon: "nb-lightbulb",
		status: "On",
		gradient: "linear-gradient(90deg,#b970ff,#8970ff)"
	};
	cardRoller = {
		title: "Roller Shades",
		icon: "nb-roller-shades",
		status: "On",
		gradient: "linear-gradient(90deg,#00d9bf,#00d977)"
	};
	cardAudio = {
		title: "Wirless Audio",
		icon: "nb-audio",
		status: "On",
		gradient: "linear-gradient(90deg,#24bdff,#2499ff)"
	};
	cardCoffee = {
		title: "Coffee Maker",
		icon: "nb-coffee-maker",
		status: "On",
		gradient: "linear-gradient(90deg,#ffd324,#ffae24)"
	};
	constructor() { }

	ngOnInit() {
	}



}
