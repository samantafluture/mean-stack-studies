import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './app-exemplo1.component.html',
  styleUrls: ['./app-exemplo1.component.scss'],
})
export class AppExemplo1Component {
  titulo = 'Tópicos das aulas';
  exibe:  boolean = true;
  topicos: string[] = [
    'Conceitos do NodeJS',
    'MVC com Express.js',
    'WebService - criação e consumo',
    'MongoDB',
    'AngularJS',
    'Angular',
  ];
}
