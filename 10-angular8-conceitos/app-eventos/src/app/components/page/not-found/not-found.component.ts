import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Quotes } from 'src/app/interfaces/quote';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  url: string = 'https://place.dog/300/200';
  quotes: any = [];

  constructor(private webservice: WebserviceService) {}

  ngOnInit(): void {
    this.webservice
      .getQuotes()
      // .subscribe((resposta) => (this.quotes = [resposta]));
      .subscribe((resposta) => this.quotes.push(resposta));
  }
}
