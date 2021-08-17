import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/page/home/home.component';
import { ListaEventosComponent } from './components/page/eventos/lista/eventos.component';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NovoEventoComponent } from './components/page/eventos/novo/novo.component';
import { FormsModule } from '@angular/forms';
import { VerEventoComponent } from './components/page/eventos/ver/ver.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListaEventosComponent,
		UsuariosComponent,
		NotFoundComponent,
		NovoEventoComponent,
		VerEventoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
