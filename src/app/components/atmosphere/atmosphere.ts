import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

interface AtmospherePhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-atmosphere',
  imports: [],
  templateUrl: './atmosphere.html',
  styleUrl: './atmosphere.css',
})
export class Atmosphere implements OnInit, OnDestroy {
  isVisible = true;
  activeIndex = 0;

  photos: AtmospherePhoto[] = [
    { src: 'images/atmosphere-1.webp', alt: 'Atmosferă antrenament 1' },
    { src: 'images/atmosphere-2.webp', alt: 'Atmosferă antrenament 2' },
    { src: 'images/atmosphere-3.webp', alt: 'Atmosferă antrenament 3' },
    { src: 'images/atmosphere-4.webp', alt: 'Atmosferă antrenament 4' },
  ];

  // Poza mica activa in pozitia mare - porneste cu prima
  activePhoto: AtmospherePhoto = this.photos[0];

  // Pozele mici sunt mereu celelalte 3
  get smallPhotos(): AtmospherePhoto[] {
    return this.photos.filter((_, i) => i !== this.activeIndex);
  }

  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {

        this.ngZone.run(() => {
          this.isVisible = false;
          this.cdr.detectChanges();
        });

        setTimeout(() => {
          this.ngZone.run(() => {
            this.activeIndex = (this.activeIndex + 1) % this.photos.length;
            this.activePhoto = this.photos[this.activeIndex];
            this.isVisible = true;
            this.cdr.detectChanges();
          });
        }, 600);

      }, 5000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
