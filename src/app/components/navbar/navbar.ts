import { Component } from '@angular/core';
import { coachInfo } from '../../data/coach-info';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  coach = coachInfo;
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(sectionId: string): void {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navLinks = [
    { label: 'Servicii', href: '#servicii' },
    { label: 'Despre', href: '#despre' },
    { label: 'Beneficii', href: '#beneficii' },
    { label: 'Contact', href: '#contact' },
  ];
}
