import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
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
