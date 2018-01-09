import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { themeModule} from './@theme/theme.module';
import { DashboardComponent} from './pages/dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { GoodsBoardComponent } from './goods-board/goods-board.component';
// import { AppRoutingModule } from './app-routing.module';
const routes: Routes = [
  {path:'', component: DashboardComponent },
	{path:'goods-board', component: GoodsBoardComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		GoodsBoardComponent
	],
	imports: [
		// AppRoutingModule,
		RouterModule.forRoot(routes, {useHash:true}),
		BrowserModule,
		PagesModule,
		themeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
