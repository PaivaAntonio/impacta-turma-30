import { TopicosService } from './../../services/topicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-exemplo3',
  templateUrl: './app-exemplo3.component.html',
  styleUrls: ['./app-exemplo3.component.scss']
})
export class AppExemplo3Component implements OnInit {
  topicos: string[] | undefined;

  constructor(private TopicosService: TopicosService) { }

  ngOnInit(): void {
	  this.topicos = this.TopicosService.getTopicos();
  }

}
