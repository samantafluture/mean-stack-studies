import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})

export class EventBindingComponent implements OnInit {
  escola: string = 'Impacta'; 
  
  ngOnInit(): void {

  }
  
  alterarTexto(): void {
    this.escola = 'Impacta Tecnologia';
  }
}
