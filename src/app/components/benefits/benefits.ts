import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits implements AfterViewInit {
  benefits: Benefit[] = [
    {
      title: '✅ Plan adaptat nivelului tău',
      description: 'Indiferent dacă ești la primul antrenament sau ai deja experiență, programul pornește de la nivelul tău real.',
    },
    {
      title: '✅ Corectarea execuției exercițiilor',
      description: 'Tehnica corectă previne accidentările și maximizează rezultatele. Îți corectez fiecare mișcare pas cu pas.',
    },
    {
      title: '✅ Progres monitorizat constant',
      description: 'Urmărim împreună evoluția ta și ajustăm planul ori de câte ori este nevoie pentru a menține ritmul.',
    },
    {
      title: '✅ Motivație și disciplină',
      description: 'Nu ești singur în proces. Sunt alături de tine să te motivez și să te ajut să rămâi consistent chiar și în zilele grele.',
    },
    {
      title: '✅ Abordare realistă și sustenabilă',
      description: 'Fără promisiuni false și fără metode extreme. Construim obiceiuri sănătoase care durează pe termen lung.',
    },
  ];

  @ViewChildren('benefitItem') benefitItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('benefit-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );

    this.benefitItems.forEach((item: ElementRef) => observer.observe(item.nativeElement));
  }
}
