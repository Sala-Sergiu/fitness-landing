import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})


export class Services {
  services: Service[] = [
    { icon: '🏋️', title: 'Antrenamente personale', description: 'Sesiuni față în față adaptate obiectivelor tale.' },
    { icon: '📋', title: 'Planuri de antrenament', description: 'Program structurat pe săptămâni, adaptat nivelului tău.' },
    { icon: '💻', title: 'Coaching online', description: 'Antrenamente și ghidaj de la distanță, oriunde te afli.' },
    { icon: '📈', title: 'Monitorizare progres', description: 'Urmărim împreună evoluția și ajustăm planul.' },
  ];
}