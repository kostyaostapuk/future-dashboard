import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { themeModule} from './@theme/theme.module';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		TestComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		PagesModule,
		themeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
