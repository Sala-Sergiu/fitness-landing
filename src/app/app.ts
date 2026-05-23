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
import { ImageCard } from './components/image-card/image-card';

@Component({
  selector: 'app-root',
  imports: [Hero, Services, Benefits, About, Contact, Footer, Navbar, Atmosphere, Faq, ImageCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
