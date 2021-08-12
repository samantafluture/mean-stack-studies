import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent {
  random: number = Math.random();
  imagem = 'https://placekitten.com/400/200';
}
