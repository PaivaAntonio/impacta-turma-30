import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-novo',
	templateUrl: './novo-evento.component.html',
	styleUrls: ['./novo-evento.component.scss']
})
export class NovoEventoComponent implements OnInit {
	evento: Evento;
	erro: boolean = false;

	constructor(
		private location: Location,
		private webservice: WebserviceService,
		private router: Router,
		public utilsService: UtilsService
	) {
		this.evento = {
			descricao: "",
			data: "",
			preco: 0
		}
	}

	ngOnInit(): void {

	}

	incluir(evento: Evento): void {
		this.webservice.postEvento(evento).subscribe((resposta) => {
			if (resposta.code === 500) {
				this.erro = true;
			} else{
				this.router.navigate(['/eventos']);
			}
		})
	}

}
