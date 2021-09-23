import { AppExemplo1Component } from './components/app-exemplo1/app-exemplo1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { AppExemplo3Component } from './component/app-exemplo3/app-exemplo3.component';

@NgModule({
  declarations: [
    AppComponent,
	AppExemplo1Component,
 PropertyBindingComponent,
 EventBindingComponent,
 AppExemplo3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
