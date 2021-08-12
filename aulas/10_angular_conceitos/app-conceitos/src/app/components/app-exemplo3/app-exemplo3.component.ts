import { Component, OnInit } from '@angular/core';
import { TopicosService } from 'src/app/services/topicos.service';

@Component({
	selector: 'app-exemplo3',
	templateUrl: './app-exemplo3.component.html',
	styleUrls: ['./app-exemplo3.component.scss']
})
export class AppExemplo3Component implements OnInit {
	topicos: string[] = [];

	constructor(private topicosService: TopicosService) { }

	ngOnInit(): void {
		this.topicos = this.topicosService.getTopicos();
	}
}

// Nesse exemplo, após a service ser carregada para a aplicação/o componente, declaramos ela no modo privado, restringindo o acesso da service somente ao component.ts para uso do seu conteúdo
// Ao declarar como private (poderia ser public também caso quisessemos usar de forma pública - mas o mais indicado é private para uso do serviço somente no component.ts) podemos utilizar o 'topicosService' como item do componente com o 'this'
// No ngOnInit usamos a variável de topicos para ser populada pela função da service que retorna os dados acessando a service pelo 'this.topicosService', diferente do modo anterior sem o 'this' (pois o mesmo estava declarado no próprio constructor)
