import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private webservice: WebserviceService) { }

  ngOnInit(): void {
    this.webservice
      .getUsuarios()
      .subscribe((resposta) => (this.usuarios = resposta));


  }

}

