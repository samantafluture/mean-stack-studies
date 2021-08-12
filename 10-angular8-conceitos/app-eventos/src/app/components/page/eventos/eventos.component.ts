import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private webservice: WebserviceService) {}

  ngOnInit(): void {
    this.webservice
      .getEventos()
      .subscribe((resposta) => (this.eventos = resposta));
  }
}
