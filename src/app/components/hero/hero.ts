import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ImageCard } from '../image-card/image-card';

interface Stat {
  label: string;
  target: number;
  suffix: string;
  current: number;
}

@Component({
  selector: 'app-hero',
  imports: [ImageCard],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  stats: Stat[] = [
    { label: 'Clienți', target: 150, suffix: '+', current: 0 },
    { label: 'Experiență', target: 5, suffix: ' ani', current: 0 },
    { label: 'Satisfacție', target: 98, suffix: '%', current: 0 },
  ];

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

  scrollTo(sectionId: string): void {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.stats.forEach(stat => this.animateCounter(stat));
    });
  }

  private animateCounter(stat: Stat): void {
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      stat.current = Math.floor(eased * stat.target);
      this.cdr.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        stat.current = stat.target;
        this.cdr.detectChanges();
      }
    };

    requestAnimationFrame(step);
  }
}
