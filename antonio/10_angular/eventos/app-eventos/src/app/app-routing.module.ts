import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { EventosComponent } from './components/page/eventos/eventos.component';
import { HomeComponent } from './components/page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: "usuarios",
    component:UsuariosComponent
  },
  {
    path: "eventos",
    component:EventosComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
