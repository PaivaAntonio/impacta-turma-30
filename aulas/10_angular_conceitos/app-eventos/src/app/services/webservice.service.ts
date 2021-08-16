import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';

@Injectable({
	providedIn: 'root'
})
export class WebserviceService {
	// urlEnvCRUD: string = environment.urlCRUD;
	// urlEnvList: string = environment.urlList;

	urlCRUD: string = "http://localhost:3200/evento";
	urlList: string = "http://localhost:3200/eventos";

	// HttpClient serve como o http que usamos no AngularJS para requisições
	constructor(private http: HttpClient) { }

	// criamos uma função publica para ser acessada pela aplicação
	// a função é um observable que vai aguardar e observar uma chamada/requisição e retornar 'algo'
	// esse 'algo' é tipado no tipo de 'Evento[]' - que significa uma lista por conta dos colchetes e Evento que é a interface que criamos
	// o observable por aguardar tem como padrão o return, e já solicitamos diretamente a requisição do tipo get para pegar os eventos da nossa API
	// falamos também para a requisição o que é esperado no seu tipo = Evento[]
	// e falamos de onde esperamos essa lista = urlList
	public getEventos(): Observable<Evento[]>{
		return this.http.get<Evento[]>(this.urlList);
	}

	public postEvento(evento: Evento): Observable<Evento>{
		return this.http.post<Evento>(this.urlCRUD, evento)
	}
}
