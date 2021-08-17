import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Evento } from 'src/app/interfaces/evento';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-editar',
	templateUrl: './editar.component.html',
	styleUrls: ['./editar.component.scss']
})
export class EditarEventoComponent implements OnInit {
	evento: Evento;
	constructor(
		private activatedRoute: ActivatedRoute,
		private webservice: WebserviceService,
		private router: Router,
		private location: Location,
		private logService: LogService
	) {
		this.logService.show('info', 'entrou no editar');
		this.evento = {
			descricao: '',
			data: '',
			preco: 0
		}
	}

	ngOnInit(): void {
		this.logService.show('warning', 'inicializou o editar');
		const id = this.activatedRoute.snapshot.paramMap.get("idEvento");
		this.getEvento(id);
	}

	getEvento(id: any){
		this.logService.show('error', 'pegou o evento');
		console.log(id, "oi", "tchau")
		this.webservice.getEvento(id).subscribe(resposta => {
			this.evento = resposta;
			this.evento.data = moment(resposta.data).format("YYYY-MM-DD");
		})
	}

	alterar(evento: Evento): void{
		this.logService.show('log', 'alterou');
		this.webservice.putEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos']);
		})
	}

	cancelar() {
		this.location.back();
		return false;
	}

}
