import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss'],
})
export class NovoEventoComponent implements OnInit {
  evento!: Evento;

  constructor(
    private location: Location,
    private webservice: WebserviceService,
    private router: Router
  ) {
    this.evento = {
      descricao: '',
      data: '',
      preco: 0,
    };
  }

  ngOnInit(): void {
    this.evento = {
      descricao: '',
      data: '',
      preco: 0,
    };
  }

  cancelar() {
    this.location.back();
    return false;
  }

  incluir(evento: Evento): void {
    this.webservice.postEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }
}
