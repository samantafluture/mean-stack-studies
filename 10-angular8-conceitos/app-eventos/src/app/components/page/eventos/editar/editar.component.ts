import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';
import * as moment from 'moment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarEventoComponent implements OnInit {
  evento: Evento;

  constructor(
    private activatedRoute: ActivatedRoute,
    private webservice: WebserviceService,
    private router: Router,
    private location: Location
  ) {
    this.evento = {
      descricao: '',
      data: '',
      preco: 0,
    };
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('idEvento');
    this.getEvento(id);
  }

  getEvento(id: any) {
    this.webservice.getEvento(id).subscribe((resposta) => {
      this.evento = resposta;
      this.evento.data = moment(resposta.data).format('YYYY-MM-DD');
    });
  }

  alterar(evento: Evento): void {
    this.webservice.putEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }

  cancelar() {
    this.location.back();
    return false;
  }
}
