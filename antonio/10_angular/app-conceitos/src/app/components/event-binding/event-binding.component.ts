import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  ngOnInit(): void {
	  throw new Error('Method not implemented.');
  }

  escola: string = "impacta";

  alterarTexto(): void{
	  this.escola = "Impacta Tecnologia";
  }
}
