import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  openIndex: number | null = null;

  faqs: FaqItem[] = [
    {
      question: 'Trebuie să am experiență anterioară pentru a lucra cu tine?',
      answer: 'Nu, deloc. Lucrez cu persoane la toate nivelurile — de la cei care nu au mai pus mâna pe o greutate, până la sportivi avansați. Programul este adaptat complet la nivelul tău actual.',
    },
    {
      question: 'Unde au loc antrenamentele?',
      answer: 'Antrenamentele se desfășoară în Oradea, la sala parteneră sau în aer liber. Ofer și opțiunea de coaching online pentru cei care nu pot ajunge fizic.',
    },
    {
      question: 'Cât de des trebuie să mă antrenez?',
      answer: 'Depinde de obiectivele tale. De obicei recomand 3-4 sesiuni pe săptămână pentru rezultate optime, dar programul poate fi ajustat în funcție de timpul tău disponibil.',
    },
    {
      question: 'Incluzi și un plan de alimentație?',
      answer: 'Ofer recomandări generale de nutriție adaptate obiectivelor tale. Pentru un plan alimentar detaliat, colaborez cu nutriționiști specializați pe care ți-i pot recomanda.',
    },
    {
      question: 'Cum încep colaborarea cu tine?',
      answer: 'Simplu — mă contactezi prin telefon, email sau mesaj pe Instagram. Stabilim o discuție inițială gratuită în care îți evaluez nivelul și stabilim împreună cel mai bun plan.',
    },
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
