import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
		DashboardModule
  ],
	exports: [ DashboardModule ],
  declarations: [
  ]
})
export class PagesModule { }
