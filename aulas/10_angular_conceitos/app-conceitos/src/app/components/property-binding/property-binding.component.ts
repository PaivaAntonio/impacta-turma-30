import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent  {
	// Exemplo de property binding
	// um tipo de Binding Unidirecional (component -> view)
	// é enviado desse arquivo (.ts) para o arquivo de HTML uma informação "dinâmica" que é processada pelo typescript

	random: number = Math.random();
	imagem = "http://lorempixel.com/400/200/animals";
	// 400 é a largura e 200 é a altura
}
