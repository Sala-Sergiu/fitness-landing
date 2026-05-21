import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Benefits } from "./components/benefits/benefits";
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Atmosphere } from './components/atmosphere/atmosphere';
import { Faq } from './components/faq/faq';

@Component({
  selector: 'app-root',
  imports: [Hero, Services, Benefits, About, Contact, Footer, Navbar, Atmosphere, Faq],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
