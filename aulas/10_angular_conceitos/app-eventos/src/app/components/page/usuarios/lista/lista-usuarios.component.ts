import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
	usuarios: Usuario[] = [];

	constructor(private webservice: WebserviceService) { }

	ngOnInit(): void {
		this.webservice.getUsuarios().subscribe(resposta => this.usuarios = resposta);
	}

}
