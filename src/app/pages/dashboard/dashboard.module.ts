import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './card/card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PlayerComponent } from './player/player.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SolarPanelComponent } from './solar-panel/solar-panel.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { TrafficComponent } from './traffic/traffic.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherComponent } from './weather/weather.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		DashboardComponent,
		CardComponent,
		TemperatureComponent,
		ElectricityComponent,
		RoomsComponent,
		PlayerComponent,
		ContactListComponent,
		SolarPanelComponent,
		NewsSliderComponent,
		TrafficComponent,
		GalleryComponent,
		WeatherComponent,
		FooterComponent],
	declarations: [
		CardComponent,
		DashboardComponent,
		ElectricityComponent,
		TemperatureComponent,
		RoomsComponent,
		PlayerComponent,
		ContactListComponent,
		SolarPanelComponent,
		NewsSliderComponent,
		TrafficComponent,
		WeatherComponent,
		GalleryComponent,
		FooterComponent]
})
export class DashboardModule { }
