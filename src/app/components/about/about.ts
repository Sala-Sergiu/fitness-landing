import { Component } from '@angular/core';
import { ImageCard } from '../image-card/image-card';

@Component({
  selector: 'app-about',
  imports: [ImageCard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  tags: string[] = [
    '💪 Personal Trainer',
    '📍 Oradea',
    '⏱️ 5 ani experiență',
    '🎯 150+ clienți',
    '🏅 Certificat FREF',
  ];
}
