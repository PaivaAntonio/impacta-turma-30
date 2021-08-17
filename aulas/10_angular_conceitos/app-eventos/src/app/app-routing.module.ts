import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEventoComponent } from './components/page/eventos/editar/editar-evento.component';
import { ExcluirEventoComponent } from './components/page/eventos/excluir/excluir-evento.component';
import { ListaEventosComponent } from './components/page/eventos/lista/lista-eventos.component';
import { NovoEventoComponent } from './components/page/eventos/novo/novo-evento.component';
import { VerEventoComponent } from './components/page/eventos/ver/ver-evento.component';
import { HomeComponent } from './components/page/home/home.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { ListaUsuariosComponent } from './components/page/usuarios/lista/lista-usuarios.component';
import { VerUsuarioComponent } from './components/page/usuarios/ver/ver-usuario.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "eventos",
		component: ListaEventosComponent
	},
	{
		path: "eventos/novo",
		component: NovoEventoComponent
	},
	{
		path: "evento/:idEvento",
		component: VerEventoComponent
	},
	{
		path: "evento/editar/:idEvento",
		component: EditarEventoComponent
	},
	{
		path: "evento/excluir/:idEvento",
		component: ExcluirEventoComponent
	},
	{
		path: "usuarios",
		component: ListaUsuariosComponent
	},
	{
		path: "usuario/:idUsuario",
		component: VerUsuarioComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
