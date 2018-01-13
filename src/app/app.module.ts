import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { themeModule } from './@theme/theme.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';

import { VkBoardService } from './vk-board/vk-board.service';
import { FilterService } from './vk-board/filter/data/filter.service';
import { VkBoardComponent } from './vk-board/vk-board.component';
import { FilterComponent } from './vk-board/filter/filter.component';

// import { AppRoutingModule } from './app-routing.module';

// import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

const routes: Routes = [
  {path:'', component: DashboardComponent },
	{path:'vk-board', component: VkBoardComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
    VkBoardComponent,
    FilterComponent
	],
	imports: [
		// AppRoutingModule,
		RouterModule.forRoot(routes, {useHash:true}),
		BrowserModule,
		PagesModule,
		themeModule,
    HttpClientModule,
    JsonpModule
	],
	providers: [VkBoardService, FilterService],
	bootstrap: [AppComponent]
})

export class AppModule { }
