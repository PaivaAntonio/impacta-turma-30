import { Component, OnInit } from '@angular/core';
import { TopicosService } from 'src/app/services/topicos.service';

@Component({
	selector: 'app-exemplo2',
	templateUrl: './app-exemplo2.component.html',
	styleUrls: ['./app-exemplo2.component.scss']
})
export class AppExemplo2Component implements OnInit {
	topicos: string[] = [];

	constructor(topicosService: TopicosService) {
		this.topicos = topicosService.getTopicos();
	}

	ngOnInit(): void { }
}

// Usamos a service no constructor para que o componente possa fazer uso do serviço de pegar os dados/as informações dos tópicos das aulas
// Criamos a variável do componente antes do constructor para que a aplicação/o componente já esteja com o dado esperando para ser populado
// Ao carregar a service pelo constructor usamos a mesma direto no constructor para pegar essas informações e então atribuimos o retorno dos dados na variável de tópicos
// O uso da service se faz pelo nome dela (ponto) nome da função
