import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atmosphere } from './atmosphere';

describe('Atmosphere', () => {
  let component: Atmosphere;
  let fixture: ComponentFixture<Atmosphere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atmosphere],
    }).compileComponents();

    fixture = TestBed.createComponent(Atmosphere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
