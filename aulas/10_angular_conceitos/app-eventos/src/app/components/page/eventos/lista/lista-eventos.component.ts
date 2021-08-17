import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-eventos',
	templateUrl: './lista-eventos.component.html',
	styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
	eventos: Evento[] = [];

	constructor(private webservice: WebserviceService) { }

	ngOnInit(): void {
		// por termos um Observable, a função de getEventos usa após sua chamada o subscribe, que se 'inscreve' nessa 'observação' aguardando um retorno
		// no subscribe utilizamos o callback, que podemos usar no modelo arrow function, que esperamos diretamente a resposta que será nossa lista de eventos, é o subscribe que capture o retorno da Observable
		// atribuimos então a resposta a lista de eventos criada já modelada para ser uma lista de eventos -> Evento[]
		this.webservice.getEventos().subscribe(resposta => this.eventos = resposta);
	}

}
