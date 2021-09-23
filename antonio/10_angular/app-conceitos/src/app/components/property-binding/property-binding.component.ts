import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent  {

  random: number = Math.random();
  imagem = "http://lorempixel.com/400/200/animals";

}
