import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { UtilsService } from 'src/app/services/utils.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir-evento.component.html',
  styleUrls: ['./excluir-evento.component.scss']
})
export class ExcluirEventoComponent implements OnInit {

	evento: Evento;
	constructor(
		private activatedRoute: ActivatedRoute,
		private webservice: WebserviceService,
		private router: Router,
		private location: Location,
		public utilsService: UtilsService
	) {
		this.evento = {
			descricao: '',
			data: '',
			preco: 0
		}
	}

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.paramMap.get("idEvento");
		this.getEvento(id);
	}

	getEvento(id: any){
		this.webservice.getEvento(id).subscribe(resposta => {
			this.evento = resposta;
		})
	}

	excluir(id: any): void{
		this.webservice.deleteEvento(id).subscribe(() => {
			this.router.navigate(['/eventos']);
		})
	}

}
