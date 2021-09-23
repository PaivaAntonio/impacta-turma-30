import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicosService {

  getTopicos(): string[]{
	  return[
		  'conceitos do node',
		  'conceitos do node',
		  'conceitos do node'
	  ]
  }
}
