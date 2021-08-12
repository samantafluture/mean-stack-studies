import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicosService {
  getTopicos(): string[] {
    return [
      'Conceitos do NodeJS',
      'MVC com Express.js',
      'WebService - criação e consumo',
      'MongoDB',
      'AngularJS',
      'Angular',
    ];
  }
}
