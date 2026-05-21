import { Component } from '@angular/core';
import { coachInfo } from '../../data/coach-info';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  coach = coachInfo;
}
