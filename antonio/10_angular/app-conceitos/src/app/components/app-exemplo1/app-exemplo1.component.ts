import { TopicosService } from './../../services/topicos.service';
import { Component } from "@angular/core";

@Component({
	selector: 'app-exemplo1',
	templateUrl: './app-exemplo1.component.html',
	styleUrls:['./app-exemplo1.component.scss']
})
export class AppExemplo1Component{
	topicos: string[] = [
		'Conceitos do nodeJS',
		'mvc com Express.js',
		'Webservice - criação e consumo',
		'MongoDB',
		'AngularJS',
		'Angular'
	]

	constructor(TopicosService: TopicosService){
		this.topicos = TopicosService.getTopicos();

	}

	ngOnInit(): void {}

}
