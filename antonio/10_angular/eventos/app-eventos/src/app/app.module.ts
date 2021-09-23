import { SharedModule } from './components/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { EventosComponent } from './components/page/eventos/eventos.component';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventosComponent,
    UsuariosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
