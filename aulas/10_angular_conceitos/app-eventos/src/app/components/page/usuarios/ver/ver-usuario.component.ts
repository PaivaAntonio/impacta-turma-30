import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UtilsService } from 'src/app/services/utils.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-ver',
	templateUrl: './ver-usuario.component.html',
	styleUrls: ['./ver-usuario.component.scss']
})
export class VerUsuarioComponent implements OnInit {
	usuario: Usuario;

	constructor(
		private activatedRoute: ActivatedRoute,
		private webservice: WebserviceService,
		public utilsService: UtilsService
	) {
		this.usuario = {
			nome: "",
			senha: ""
		}
	}

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.paramMap.get('idUsuario');

		this.webservice.getUsuario(id).subscribe(resposta => {
			this.usuario = resposta;
		})
	}

}
