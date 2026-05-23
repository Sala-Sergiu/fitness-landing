import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  imports: [],
  templateUrl: './image-card.html',
  styleUrl: './image-card.css',
})
export class ImageCard {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() objectPosition: string = 'center';
}
