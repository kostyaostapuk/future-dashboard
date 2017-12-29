import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { themeModule} from './@theme/theme.module';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
	],
	imports: [
		BrowserModule,
		PagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
