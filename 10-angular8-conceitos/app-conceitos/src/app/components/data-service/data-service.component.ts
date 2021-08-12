import { Component, OnInit } from '@angular/core';
import { TopicosService } from 'src/app/services/topicos.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.scss']
})
export class DataServiceComponent implements OnInit {
  topicos: string[] = [];

  constructor(topicosService: TopicosService) {
    this.topicos = topicosService.getTopicos(); 
  }

  ngOnInit(): void {
  }

}
