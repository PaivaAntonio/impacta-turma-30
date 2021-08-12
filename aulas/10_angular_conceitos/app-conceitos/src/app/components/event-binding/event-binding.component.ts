import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
	// Exemplo de event binding
	// um tipo de Binding Unidirecional (view -> component)
	// esse arquivo (.ts) recebe algo vindo do HTML

	escola: string = "Impacta";

	alterarTexto(): void{
		this.escola = "Impacta Tecnologia";
	}

	// o constructor tem o papel de ser executado quando o componente é criado
	// ele é uma função especial para ser processada quando o componente passa a existir
	// sua tarefa se torna receber (possíveis) objetos através de injeção de dependência (não é obrigatório um componente ter dependências)
	// e então compreender e carregar tudo o que esse componente precisa ter para existir
	constructor(){}

	// o ngOnInit é uma propriedade em forma de função da Interface OnInit que funciona/é ativada quando o componente é inicializado
	// essa função se torna uma função necessária do componente para que então seja processado todas as informações necessárias em sua inicialização
	// uma Interface tem APENAS DEFINIÇÕES - variáveis, objetos, propriedades ou funções
	ngOnInit(): void{

	}
}
