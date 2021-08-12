import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
	declarations: [
		MenuComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		CollapseModule.forRoot(),
		BsDropdownModule.forRoot()
	],
	exports: [
		MenuComponent
	]
})
export class SharedModule { }
